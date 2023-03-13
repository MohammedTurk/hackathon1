export const URL_PATHS = {
  HOME: "/",
  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_CODE: "/forgot-password/verify-code",
    NEW_PASSWORD: "/forgot-password/new-password",
  },
  INVOICES: {
    INDEX: "/invoices",
    CREATE: "/invoices/new",
    PAY_INVOICE: {
      CONFIRM_DETAILS: "/invoices/pay-invoice/[invoiceId]/confirm-details",
      PREVIEW_INVOICE: "/invoices/pay-invoice/[invoiceId]/preview-invoice",
      PAY_INVOICE: "/invoices/pay-invoice/[invoiceId]/pay-invoice",
      CONFIRMATION: "/invoices/pay-invoice/[invoiceId]/confirmation",
    },
  },
  BALANCE: {
    INDEX: "/balance",
  },
  VERIFICATION: {
    INDEX: "/verification",
    EMAIL: "/verification/email",
    PHONE: "/verification/phone",
    IDENTITY: "/verification/identity",
    ADDRESS: "/verification/address",
  },
} as const;

export const APP_ROUTES: {
  readonly PROTECTED_ROUTES: readonly string[];
  readonly PUBLIC_ROUTES: readonly string[];
  readonly AUTH_ROUTES: readonly string[];
} = {
  PROTECTED_ROUTES: [
    URL_PATHS.HOME,
    URL_PATHS.INVOICES.INDEX,
    URL_PATHS.INVOICES.CREATE,
    URL_PATHS.VERIFICATION.INDEX,
    URL_PATHS.VERIFICATION.EMAIL,
    URL_PATHS.VERIFICATION.PHONE,
    URL_PATHS.VERIFICATION.IDENTITY,
    URL_PATHS.VERIFICATION.ADDRESS,
  ],
  PUBLIC_ROUTES: [
    URL_PATHS.BALANCE.INDEX,

  ],
  AUTH_ROUTES: [
    URL_PATHS.AUTH.SIGN_IN,
    URL_PATHS.AUTH.SIGN_UP,
    URL_PATHS.AUTH.FORGOT_PASSWORD,
    URL_PATHS.AUTH.VERIFY_CODE,
    URL_PATHS.AUTH.NEW_PASSWORD,
  ],
};
