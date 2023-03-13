import { useRouter } from "next/router";
import useForm from "lib/react-hook-form";
import { Input, Button, HelperText } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS, FORM_VALIDATION } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "utils";
import type {
  NewPasswordFormInputsType,
  NewPasswordResponseType,
  NewPasswordFormPayloadType,
  NewPasswordFormType,
} from "../../types";

export const NewPasswordForm: NewPasswordFormType = ({ onSuccess }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<NewPasswordFormInputsType>();

  const {
    fetchData: recoverPassword,
    error,
    loading,
  } = useAxios<NewPasswordResponseType, NewPasswordFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.RECOVER_PASSWORD,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: () => onSuccess(),
  });

  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    const payload = {
      password: data.password,
      recoverToken: router.query.recoverToken as string,
    };
    recoverPassword(payload);
  });

  // maybe handle this in the middleware function
  if (!router.query.recoverToken) {
    router.replace(URL_PATHS.AUTH.FORGOT_PASSWORD);
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="password-input"
        type="password"
        label="New Password"
        placeholder="Enter New Password"
        inputSize="small"
        {...register("password", FORM_VALIDATION.password)}
        error={!!errors.password}
        helperText={getFieldHelperText("error", errors.password?.message)}
      />
      <Input
        id="re-password-input"
        type="password"
        label="Re-Enter Password"
        placeholder="Re-Enter Password"
        inputSize="small"
        {...register("rePassword", {
          validate: (value) => {
            return getValues("password") === value || "Password does not match";
          },
        })}
        error={!!errors.rePassword}
        helperText={getFieldHelperText("error", errors.rePassword?.message)}
      />
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth className="mb-6">
        {loading ? "Loading.." : "Continue"}
      </Button>
    </form>
  );
};

export default NewPasswordForm;
