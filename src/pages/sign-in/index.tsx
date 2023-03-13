import { RegistrationCard, SignInForm } from "features/authentication";
import { Link } from "components";
import type { NextPageWithLayout } from "types";

const SignIn: NextPageWithLayout = () => {
  return (
    <RegistrationCard
      formTitle="Sign In"
      formCaption={
        <>
          Don&apos;t have an account?{" "}
          <Link href="sign-up" className="text-blue-light">
            Sign up
          </Link>
        </>
      }
    >
      <SignInForm />
    </RegistrationCard>
  );
};

SignIn.mainLayoutProps = {
  title: "Talents Valley Sign In",
  pageDescription: "Sign in page description",
  withoutNavbar: true,
};

export default SignIn;
