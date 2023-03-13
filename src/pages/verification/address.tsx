import { useRouter } from "next/router";
import { VerificationCard, VerifyAddressForm } from "features/verification";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const AddressVerification: NextPageWithLayout = () => {
  const router = useRouter();
  const { user, updateUser } = useCurrentUser();
  const verifyAddressStatus = user?.verifiedAddress.status;
  let pageDescription: string | undefined;
  let content = (
    <p className="text-base text-center my-4">
      Your Address is already verified.
    </p>
  );

  const onVerify = () => {
    if (user) {
      updateUser({
        ...user,
        verifiedAddress: {
          ...user.verifiedAddress,
          status: "pending",
        },
      });
      router.push(URL_PATHS.VERIFICATION.INDEX);
    }
  };

  if (
    verifyAddressStatus === "not_uploaded" ||
    verifyAddressStatus === "rejected"
  ) {
    pageDescription =
      "Upload Document That Proof Your Address Such As: Bill Phone, Electricity, Water, Bank Statement";
    content = <VerifyAddressForm onVerify={onVerify} />;
  } else if (verifyAddressStatus === "pending") {
    content = (
      <p className="text-base text-center my-4">
        We are verifying your address and your details will be updated shortly
      </p>
    );
  }

  return (
    <NoSsr>
      <VerificationCard
        title="Address Verification"
        imgSrc="/assets/img/address.png"
        description={pageDescription}
      >
        {content}
      </VerificationCard>
    </NoSsr>
  );
};

AddressVerification.mainLayoutProps = {
  title: "Talents Valley Address Verification",
  pageDescription: "Address verification page description",
};

export default AddressVerification;
