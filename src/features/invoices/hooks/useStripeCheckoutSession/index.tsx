import { useSWRMutation, type MutationFetcher } from "lib/swr";
import axios from "lib/axios";
import { API_SERVICES_URLS } from "data";
import type {
  CreateStripeSessionResponse,
  CreateStripeSessionArgType,
} from "../../types";

const createStripeSession: MutationFetcher<
  CreateStripeSessionResponse,
  CreateStripeSessionArgType,
  string
> = (url, { arg }) => axios.post(url, arg).then((res) => res.data);

const useStripeCheckoutSession = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    API_SERVICES_URLS.PAYMENT.STRIPE_SESSION,
    createStripeSession
  );

  return {
    createSession: trigger,
    data: data?.data,
    error,
    isLoading: isMutating,
  };
};

export default useStripeCheckoutSession;
