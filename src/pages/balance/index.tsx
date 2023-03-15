import { BalanceCard } from "components";
import { Withdrawal } from "features/payout/components/withdrawal";
import { GeneralLayout } from "layouts";

// import Withdrawal from "../";

export const Balance = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      <Withdrawal />
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
