import {   BalanceCard } from "components";
import { GeneralLayout } from "layouts";

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
