import { useRouter } from "next/router";
import { removeCookie } from "lib/js-cookie";
import { COOKIES_KEYS, URL_PATHS } from "data";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    removeCookie(COOKIES_KEYS.currentUser);
    router.push(URL_PATHS.AUTH.SIGN_IN);
  };
  return logout;
};

export default useLogout;
