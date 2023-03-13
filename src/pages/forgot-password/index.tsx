import { RegistrationCard, ForgotPasswordForm } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <RegistrationCard formTitle="Forgot Password?" withBackButton>
        <p className="text-sm text-gray-dark mb-4">
          We&apos;ll send a code to your email to reset your password
        </p>
        <ForgotPasswordForm />
      </RegistrationCard>
    </NoSsr>
  );
};

ForgotPassword.mainLayoutProps = {
  title: "Talents Valley Forgot Password",
  pageDescription: "Forgot password page description",
  withoutNavbar: true,
};

export default ForgotPassword;
