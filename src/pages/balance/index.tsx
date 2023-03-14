import BalanceCard from "components/BalanceCard";

import { Preview } from "features/payout/components";

import { GeneralLayout } from "layouts";

export const Balance = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      <Preview />
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
