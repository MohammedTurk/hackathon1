import { useState } from "react";
import {
  RegistrationCard,
  NewPasswordForm,
  CodeVerified,
} from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const NewPassword: NextPageWithLayout = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <NoSsr>
      <RegistrationCard
        formTitle={!showSuccess ? "Create New Password" : undefined}
        withBackButton={!showSuccess}
      >
        {showSuccess ? (
          <CodeVerified />
        ) : (
          <NewPasswordForm onSuccess={() => setShowSuccess(true)} />
        )}
      </RegistrationCard>
    </NoSsr>
  );
};

NewPassword.mainLayoutProps = {
  title: "Talents Valley New Password",
  pageDescription: "New password page description",
  withoutNavbar: true,
};

export default NewPassword;
