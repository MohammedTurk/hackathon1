import { useSWR, type Fetcher } from "lib/swr";
import axios from "lib/axios";
import { API_SERVICES_URLS } from "data";
import type { InvoicePreviewResponse } from "../../types";

const invoicePreviewFetcher: Fetcher<InvoicePreviewResponse, string> = (url) =>
  axios.get(url).then((res) => res.data);

export const useInvoicePreview = (id: string | undefined) => {
  const { data, error, isLoading } = useSWR(
    id ? API_SERVICES_URLS.CLIENT.INVOICE_PREVIEW(id) : null,
    invoicePreviewFetcher
  );
  return { preview: data?.data, error, isLoading };
};

export default useInvoicePreview;
