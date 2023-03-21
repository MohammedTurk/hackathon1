import { BalanceCard } from "components";
import { TransactionsWrapper } from "features/payout/components";
import { GeneralLayout } from "layouts";

export const Balance = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />} rightSideClasses="xl:!top-[9rem]">
      <TransactionsWrapper/>
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-2 !pr-4",
};

export default Balance;
