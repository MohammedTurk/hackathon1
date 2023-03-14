import {  Card,BalanceCard } from "components";
import Nav from "features/payout/components/nav";
import VerifyPhoneOtp from "features/payout/components/popUp/verifyedOtp";
import { GeneralLayout } from "layouts";
import Withdrawal from "features/payout/components/withdrawal"

export const Balance = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
ss
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
