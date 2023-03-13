import { NextResponse, type NextRequest } from "next/server";
import { APP_ROUTES, URL_PATHS, COOKIES_KEYS } from "data";
import type { CurrentUserType } from "types";

const middlewareHandler = (
  request: NextRequest,
  currentUser: string | undefined
) => {
  let currentUserJson: CurrentUserType | null = null;
  if (currentUser) {
    currentUserJson = JSON.parse(currentUser || '""');
  }
  let userData = currentUserJson?.user;
  const isLoggedIn = !!(
    currentUserJson?.accessToken &&
    currentUserJson.refreshToken &&
    userData
  );
  const canSkipVerification =
    userData?.verifiedEmail && userData?.verifiedMobile;

  if (
    APP_ROUTES.PROTECTED_ROUTES.includes(request.nextUrl.pathname) &&
    !isLoggedIn
  ) {
    request.cookies.delete(COOKIES_KEYS.currentUser);
    const response = NextResponse.redirect(
      new URL(URL_PATHS.AUTH.SIGN_IN, request.url)
    );
    response.cookies.delete(COOKIES_KEYS.currentUser);

    return response;
  }

  if (APP_ROUTES.AUTH_ROUTES.includes(request.nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL(URL_PATHS.HOME, request.url));
  }

  if (
    !canSkipVerification &&
    request.nextUrl.pathname !== URL_PATHS.VERIFICATION.INDEX &&
    APP_ROUTES.PROTECTED_ROUTES.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      new URL(URL_PATHS.VERIFICATION.INDEX, request.url)
    );
  }
};

export default middlewareHandler;
