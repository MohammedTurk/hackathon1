import { useState, useEffect, useCallback } from "react";
import axios, { isAxiosError } from "lib/axios";
import { axiosErrorHandler, getAuthorizationHeader } from "utils";
import useDeepCompareMemoize from "../useDeepCompareMemoize";
import type { UseAxiosProps, ReturnedValuesType } from "./types";
import type { ErrorType } from "types";

const DEFAULT_OPTIONS = {
  disabled: false,
  manual: false,
  withState: true,
  withAuthHeader: false,
};

export const useAxios = <DataType = any, BodyType = any>({
  config,
  options,
  onSuccess,
  onError,
}: UseAxiosProps<DataType>): ReturnedValuesType<DataType, BodyType> => {
  const _axiosParams = useDeepCompareMemoize(config);
  const _options = useDeepCompareMemoize({
    ...DEFAULT_OPTIONS,
    ...options,
  });

  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<ErrorType>();
  const [loading, setLoading] = useState(_options.manual ? false : true);

  const fetchData = useCallback(
    async (body?: BodyType) => {
      _options.withState && setData(undefined);
      _options.withState && setLoading(true);
      _options.withState && setError(undefined);
      const { headers, ...restParams } = _axiosParams;
      try {
        const response = await axios.request<DataType>({
          data: body || undefined,
          headers: _options.withAuthHeader
            ? {
                ...getAuthorizationHeader(),
                ...headers,
              }
            : headers,
          ...restParams,
        });
        const data = response.data;
        _options.withState && setData(data);
        onSuccess && onSuccess(data);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          const errorData = axiosErrorHandler(error);
          _options.withState && setError(errorData);
          onError && onError(errorData);
        } else {
          // handleUnexpectedError
        }
      } finally {
        _options.withState && setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_axiosParams, _options.withState]
  );

  const clearError = () => setError(undefined);

  useEffect(() => {
    if (!_options?.manual && !_options?.disabled) {
      fetchData();
    }
  }, [fetchData, _options?.disabled, _options?.manual]);

  return { data, error, loading, fetchData, clearError };
};

export default useAxios;
