import {  Card,BalanceCard } from "components";
import Nav from "features/payout/components/nav";
import VerifyPhoneOtp from "features/payout/components/popUp/verifyedOtp";
import { GeneralLayout } from "layouts";

export const Balance = () => {
  return (
      <GeneralLayout rightSide={<BalanceCard />}>
        <Card>
          <Nav />
        </Card>
          <VerifyPhoneOtp />
      </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
