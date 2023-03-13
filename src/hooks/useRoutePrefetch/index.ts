import { useEffect } from "react";
import Router from "next/router";

export const useRoutePrefetch = (url: string) => {
  useEffect(() => {
    Router.prefetch(url);
  }, [url]);
};

export default useRoutePrefetch;
