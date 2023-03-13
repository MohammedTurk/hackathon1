import { useSWR, type Fetcher } from "lib/swr";
import axios from "lib/axios";
import { API_SERVICES_URLS } from "data";
import type { PaymentOptionsResponse } from "../../types";

const paymentOptionsFetcher: Fetcher<PaymentOptionsResponse, string> = (url) =>
  axios.get(url).then((res) => res.data);

export const usePaymentOptions = (id: string | undefined) => {
  const { data, error, isLoading } = useSWR(
    id ? API_SERVICES_URLS.CLIENT.PAYMENT_OPTIONS(id) : null,
    paymentOptionsFetcher
  );
  return { paymentOptions: data?.data, error, isLoading };
};

export default usePaymentOptions;
