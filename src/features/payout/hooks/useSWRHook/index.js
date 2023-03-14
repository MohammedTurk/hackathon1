import useSWR from 'swr';
import axios from 'lib/axios';
import { getAuthorizationHeader } from 'utils';

const myFetcher = async (url, method, options) => {
  try {
    const response = await axios({
      url,
      method,
      ...options,
      headers: { ...getAuthorizationHeader() }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const useSWRHook = (url, method = 'get', fetcher = myFetcher, options = {}) => {
  const { data, error,isLoading } = useSWR([url, method, options], () => fetcher(url, method, options));
  return { responseData: data?.data , error, isLoading };
};

export default useSWRHook;
