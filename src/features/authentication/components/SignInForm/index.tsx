import { useRouter } from "next/router";
import useForm from "lib/react-hook-form";
import { Input, Button, HelperText, Link } from "components";
import { useAxios } from "hooks";
import {
  API_SERVICES_URLS,
  URL_PATHS,
  COOKIES_KEYS,
  FORM_VALIDATION,
} from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { setCookie } from "lib/js-cookie";
import { getFieldHelperText } from "utils";
import type { SignInFormInputsType, SignInResponseType } from "../../types";

export const SignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputsType>();
  const {
    fetchData: signIn,
    error,
    loading,
  } = useAxios<SignInResponseType, SignInFormInputsType>({
    config: {
      url: API_SERVICES_URLS.SIGN_IN,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setCookie(COOKIES_KEYS.currentUser, data.data, {
        expires: 30,
      });
      router.push(URL_PATHS.HOME);
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    signIn(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        inputSize="small"
        {...register("email", FORM_VALIDATION.email)}
        error={!!errors.email}
        helperText={getFieldHelperText("error", errors.email?.message)}
      />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        inputSize="small"
        withoutHelperText
        {...register("password")}
      />
      <Link
        href={URL_PATHS.AUTH.FORGOT_PASSWORD}
        className="block text-sm text-gray-dark text-right"
      >
        Forgot Password?
      </Link>
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading.." : "Sign In"}
      </Button>
    </form>
  );
};

export default SignInForm;
