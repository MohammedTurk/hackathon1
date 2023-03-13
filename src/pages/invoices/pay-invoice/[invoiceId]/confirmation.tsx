import {
  PayInvoiceState,
  PayInvoiceLayout,
  Confirmation,
  usePayInvoice,
} from "features/invoices";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const ConfirmationPage: NextPageWithLayout = () => {
  // create print handler + new button in the Confirmation component
  return (
    <NoSsr>
      <PayInvoiceLayout>
        <Confirmation />
      </PayInvoiceLayout>
    </NoSsr>
  );
};

ConfirmationPage.mainLayoutProps = {
  title: "Pay Invoice Confirmation",
  pageDescription: "Pay invoice confirmation page description",
  contentClassName: "!items-start",
};

ConfirmationPage.getNestedLayout = (page) => (
  <PayInvoiceState>{page}</PayInvoiceState>
);

export default ConfirmationPage;
