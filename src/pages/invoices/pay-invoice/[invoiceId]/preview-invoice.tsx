import { useRouter } from "next/router";
import {
  PayInvoiceState,
  PayInvoiceLayout,
  Preview,
  usePayInvoice,
} from "features/invoices";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const PreviewInvoicePage: NextPageWithLayout = () => {
  const { push } = useRouter();
  const {
    invoiceId,
    stepsData: { updateStepsHandler },
  } = usePayInvoice();

  const onNextClick = () => {
    updateStepsHandler("next");
    push({
      pathname: URL_PATHS.INVOICES.PAY_INVOICE.PAY_INVOICE,
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
        <Preview />
      </PayInvoiceLayout>
    </NoSsr>
  );
};

PreviewInvoicePage.mainLayoutProps = {
  title: "Pay Invoice Preview",
  pageDescription: "Pay invoice Preview page description",
  contentClassName: "!items-start",
};

PreviewInvoicePage.getNestedLayout = (page) => (
  <PayInvoiceState>{page}</PayInvoiceState>
);

export default PreviewInvoicePage;
