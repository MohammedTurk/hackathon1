import { RegistrationCard, SignUpForm } from "features/authentication";
import { Link } from "components";
import type { NextPageWithLayout } from "types";

const SignUp: NextPageWithLayout = () => {
  return (
    <RegistrationCard
      formTitle="Create Your Account"
      formCaption={
        <>
          Already have an account?{" "}
          <Link href="sign-in" className="text-blue-light">
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm />
    </RegistrationCard>
  );
};

SignUp.mainLayoutProps = {
  title: "Talents Valley Sign Up",
  pageDescription: "Sign up page description",
  withoutNavbar: true,
};

export default SignUp;
