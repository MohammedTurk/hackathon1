import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";

export const getAuthorizationHeader = () => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);

  return {
    Authorization: `Bearer ${currentUser?.accessToken || ""}`,
  };
};

export default getAuthorizationHeader;
