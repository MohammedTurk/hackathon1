import { useRouter } from "next/router";
import {
  PayInvoiceState,
  PayInvoiceLayout,
  Payment,
  usePayInvoice,
} from "features/invoices";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const PayInvoicePage: NextPageWithLayout = () => {
  const { push } = useRouter();
  const {
    invoiceId,
    stepsData: { updateStepsHandler },
  } = usePayInvoice();

  const onNextClick = () => {
    // @TODO: Payment logic after click
    // after successful payment
    updateStepsHandler("next");
    push({
      pathname: URL_PATHS.INVOICES.PAY_INVOICE.CONFIRMATION,
      query: { invoiceId: invoiceId },
    });
  };

  return (
    <NoSsr>
      <PayInvoiceLayout
        nextProps={{
          onClick: onNextClick,
        }}
      >
        <Payment />
      </PayInvoiceLayout>
    </NoSsr>
  );
};

PayInvoicePage.mainLayoutProps = {
  title: "Pay Invoice Payment methods",
  pageDescription: "Pay invoice Payment methods page description",
  contentClassName: "!items-start",
};

PayInvoicePage.getNestedLayout = (page) => (
  <PayInvoiceState>{page}</PayInvoiceState>
);

export default PayInvoicePage;
