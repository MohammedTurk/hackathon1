import { useRouter } from "next/router";
import { Button } from "components";
import { URL_PATHS } from "data";
import type { VerifiedSuccessType } from "../../types";

export const VerifiedSuccess: VerifiedSuccessType = ({ description }) => {
  const router = useRouter();

  return (
    <>
      <p className="text-xl my-4 text-center">{description}</p>
      <Button
        type="submit"
        buttonSize="small"
        fullWidth
        onClick={() => router.push(URL_PATHS.VERIFICATION.INDEX)}
      >
        Continue
      </Button>
    </>
  );
};

export default VerifiedSuccess;
