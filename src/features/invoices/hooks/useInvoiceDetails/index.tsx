import { useSWR, type Fetcher } from "lib/swr";
import axios from "lib/axios";
import { API_SERVICES_URLS } from "data";
import type { InvoiceDetailsResponse } from "../../types";

const invoiceDetailsFetcher: Fetcher<InvoiceDetailsResponse, string> = (url) =>
  axios.get(url).then((res) => res.data);

export const useInvoiceDetails = (id: string | undefined) => {
  const { data, error, isLoading } = useSWR(
    id ? API_SERVICES_URLS.CLIENT.INVOICE_DETAILS(id) : null,
    invoiceDetailsFetcher
  );
  return { invoiceDetails: data?.data, error, isLoading };
};

export default useInvoiceDetails;
