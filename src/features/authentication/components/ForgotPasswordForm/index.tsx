import useForm from "lib/react-hook-form";
import { Input, Button } from "components";
import { useVerifyPasswordCode } from "../../hooks";
import { getFieldHelperText } from "utils";
import { FORM_VALIDATION } from "data";
import type { ForgotPasswordFormInputType } from "../../types";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputType>();

  const { sendCodeRequest, loading, error } = useVerifyPasswordCode();

  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    sendCodeRequest(data);
  });

  const errorMessage = errors.email?.message || error?.message;

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        inputSize="small"
        {...register("email", FORM_VALIDATION.email)}
        error={!!errorMessage}
        helperText={getFieldHelperText("error", errorMessage)}
      />
      <Button type="submit" buttonSize="small" fullWidth className="mb-4">
        {loading ? "Loading..." : "Send Code"}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
