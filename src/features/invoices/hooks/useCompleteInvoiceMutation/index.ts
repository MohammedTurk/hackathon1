import { useSWRMutation, type MutationFetcher } from "lib/swr";
import axios from "lib/axios";
import { API_SERVICES_URLS } from "data";
import type {
  CompleteClientInvoiceResponse,
  CompleteClientInvoiceArgType,
} from "../../types";

const completeInvoiceFetcher: MutationFetcher<
  CompleteClientInvoiceResponse,
  CompleteClientInvoiceArgType,
  string
> = (url, { arg }) => axios.post(url, arg).then((res) => res.data);

export const useCompleteInvoiceMutation = (id: string | undefined) => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    API_SERVICES_URLS.CLIENT.COMPLETE_INVOICE(id || ""),
    completeInvoiceFetcher
  );
  return {
    triggerCompleteInvoice: trigger,
    data: data?.data,
    error,
    isLoading: isMutating,
  };
};

export default useCompleteInvoiceMutation;
