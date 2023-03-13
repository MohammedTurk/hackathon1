import { VerificationCard, VerificationMethods } from "features/verification";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const Verification: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <VerificationCard
        title="Verification"
        description="To use our services, we need to verify:"
      >
        <VerificationMethods />
      </VerificationCard>
    </NoSsr>
  );
};

Verification.mainLayoutProps = {
  title: "Talents Valley Verification",
  pageDescription: "Verification page description",
};

export default Verification;
