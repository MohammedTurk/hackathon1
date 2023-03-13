import Cookies from "js-cookie";

export const setCookie = (
  name: string,
  value: any,
  options?: Cookies.CookieAttributes
) => {
  return Cookies.set(name, JSON.stringify(value), options);
};

export const getCookie = (name: string) =>
  JSON.parse(Cookies.get(name) || '""');

export const removeCookie = (
  name: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.remove(name, options);
};
