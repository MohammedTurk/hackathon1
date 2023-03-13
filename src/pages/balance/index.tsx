import { AddReciepient } from "features/payout/components";
import { TransferPreview } from "features/payout/components";
import { Delete } from "features/payout/components";
import { Recipients } from "features/payout/components";
import { Card, BalanceCard } from "components";
import { GeneralLayout } from "layouts";

export const Balance = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      {/* <AddReciepient /> */}
      {/* <TransferPreview /> */}
      {/* <Delete /> */}
      {/* <Recipients /> */}
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
