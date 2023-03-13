import { useRef } from "react";
import { useRouter } from "next/router";
import {
  PayInvoiceState,
  PayInvoiceLayout,
  ConfirmDetails,
  usePayInvoice,
  useCompleteInvoiceMutation,
  type CompleteClientInvoiceArgType,
} from "features/invoices";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const ConfirmDetailsPage: NextPageWithLayout = () => {
  const formRef = useRef<HTMLButtonElement>(null);
  const { push, replace, pathname } = useRouter();
  const {
    invoiceId,
    stepsData: { updateStepsHandler },
    invoiceDetails,
  } = usePayInvoice();
  const { triggerCompleteInvoice, isLoading } =
    useCompleteInvoiceMutation(invoiceId);

  const onNextClick = () => formRef.current?.click();

  const onSubmit = async (data: CompleteClientInvoiceArgType) => {
    try {
      const result = await triggerCompleteInvoice(data);
      if (invoiceDetails.data?.type === "service") {
        replace(
          pathname,
          { query: { invoiceId: result?.data?.invoiceId } },
          { shallow: true }
        );
      }

      updateStepsHandler("next");
      push({
        pathname: URL_PATHS.INVOICES.PAY_INVOICE.PREVIEW_INVOICE,
        query: { invoiceId: invoiceId },
      });
    } catch (error) {
      console.log("😥 ~ triggerCompleteInvoice ~ error", error);
    }
  };

  return (
    <NoSsr>
      <PayInvoiceLayout
        nextProps={{
          onClick: onNextClick,
          loading: isLoading,
        }}
      >
        <ConfirmDetails ref={formRef} onSubmit={onSubmit} />
      </PayInvoiceLayout>
    </NoSsr>
  );
};

ConfirmDetailsPage.mainLayoutProps = {
  title: "Pay Invoice Confirm Details",
  pageDescription: "Pay invoice confirm details page description",
  contentClassName: "!items-start",
};

ConfirmDetailsPage.getNestedLayout = (page) => (
  <PayInvoiceState>{page}</PayInvoiceState>
);

export default ConfirmDetailsPage;
