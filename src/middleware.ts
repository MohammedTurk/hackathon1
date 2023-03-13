import type { NextRequest } from "next/server";
import { COOKIES_KEYS } from "data";
import middlewareHandler from "utils/middlewareHandler";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(COOKIES_KEYS.currentUser);

  return middlewareHandler(request, currentUser);
}
