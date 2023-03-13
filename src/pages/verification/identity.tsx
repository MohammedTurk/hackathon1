import { useRouter } from "next/router";
import { VerificationCard, VerifyIdentityForm } from "features/verification";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const IdentityVerification: NextPageWithLayout = () => {
  const router = useRouter();
  const { user, updateUser } = useCurrentUser();
  const verifyIdStatus = user?.verifiedId.status;
  let pageDescription: string | undefined;
  let content = (
    <p className="text-base text-center my-4">Your ID is already verified.</p>
  );

  const onVerify = () => {
    if (user) {
      updateUser({
        ...user,
        verifiedId: {
          ...user.verifiedId,
          status: "pending",
        },
      });
      router.push(URL_PATHS.VERIFICATION.INDEX);
    }
  };

  if (verifyIdStatus === "not_uploaded" || verifyIdStatus === "rejected") {
    pageDescription =
      "Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License";
    content = <VerifyIdentityForm onVerify={onVerify} />;
  } else if (verifyIdStatus === "pending") {
    content = (
      <p className="text-base text-center my-4">
        We are verifying your identity and your details will be updated shortly
      </p>
    );
  }

  return (
    <NoSsr>
      <VerificationCard
        title="ID Verification"
        imgSrc="/assets/img/identity.png"
        description={pageDescription}
      >
        {content}
      </VerificationCard>
    </NoSsr>
  );
};

IdentityVerification.mainLayoutProps = {
  title: "Talents Valley Identity Verification",
  pageDescription: "Identity verification page description",
};

export default IdentityVerification;
