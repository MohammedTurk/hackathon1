import { BalanceCard } from "components";
 
import { WithdrawWrapper } from "features/payout/components";
import { GeneralLayout } from "layouts";

export const Withdraw = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      <WithdrawWrapper>
    <span>ss</span>
       </WithdrawWrapper>
    </GeneralLayout>
  );
};

Withdraw.mainLayoutProps = {
  title: "Talents Valley Withdraw",
  pageDescription: "Withdraw page description",
  contentClassName: "!block ",
};
export default Withdraw;
