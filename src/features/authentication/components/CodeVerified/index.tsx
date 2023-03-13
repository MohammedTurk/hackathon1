import { useRouter } from "next/router";
import { Button, Image } from "components";

export const CodeVerified = () => {
  const router = useRouter();

  return (
    <>
      <Image
        alt="code verified successfully"
        src="/assets/img/check-mark.png"
        width={65}
        height={65}
        className="m-auto mt-4"
      />
      <h6 className="text-lg my-4 font-medium text-center">Password Reset</h6>
      <p className="text-sm text-black mb-4">
        Your Password has been Successfully Reset. Click Below To Login
      </p>
      <Button
        buttonSize="small"
        fullWidth
        className="mb-6"
        onClick={() => router.push("/sign-in")}
      >
        Sign In
      </Button>
    </>
  );
};

export default CodeVerified;
