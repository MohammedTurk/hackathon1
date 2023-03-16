export const API_SERVICES_URLS = {
  SIGN_UP: "/user/signup",
  SIGN_IN: "/user/login",
  FORGOT_PASSWORD: "/user/password/forgot",
  VERIFY_CODE: "/user/password/verify-code",
  RECOVER_PASSWORD: "/user/password/recover",
  VERIFICATION: {
    SEND_EMAIL_CODE: "/user/send-code-email",
    SEND_MOBILE_CODE: "/user/send-code-mobile",
    EMAIL: "/user/verify/email",
    MOBILE: "/user/verify/mobile",
    IDENTITY: "/user/verify/id",
    ADDRESS: "/user/verify/address",
  },
  WITHDRAW: {
    OFFICE_LIST: "/withdraw/office-list",
    RECIPIENT_LIST: "/recipient/list",
    WITHDRAW_LIST :"/withdraw/list",
    ADD_RECIPIENT: "/recipient/create",
    BANK_LIST: "/bank/listing",
    ADD_BANK: "/bank/add",


    
    EDIT_RECIPIENT: (id: string) => `/recipient/edit/${id}`,
    EDIT_BANK: (id: string) => `/bank/edit/${id}`,
    Delete_RECIPIENT: (id: string) => `/recipient/delete/${id}`,
    Delete_BANK: (id: string) => `/bank/delete/${id}`,

    
    VERIFICATION: {
      SEND_MOBILE_CODE_RECIPIENT: "/recipient/send-code",
      SEND_MOBILE_CODE_BANK: "/bank/send-code",
      
    },
  },
  CLIENT: {
    INVOICE_DETAILS: (id: string) => `/invoice/client/${id}`,
    COMPLETE_INVOICE: (id: string) => `/invoice/client/complete-invoice/${id}`,
    INVOICE_PREVIEW: (id: string) => `/invoice/client/preview/${id}`,
    PAYMENT_OPTIONS: (id: string) => `/invoice/client/payment-options/${id}`,
  },
  PAYMENT: {
    STRIPE_SESSION: "/invoice/payment/stripe/create-checkout-session",
  },
} as const;

export const COOKIES_KEYS = {
  currentUser: "currentUser",
} as const;

export const LOCAL_STORAGE_KEYS = {} as const;
