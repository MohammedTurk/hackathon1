import { URL_PATHS } from "data";
import type {
  PayInvoiceStepsType,
  PaymentMethodType,
  ClientFeesType,
} from "../../types";

export const PAY_INVOICE_STEPS: PayInvoiceStepsType = [
  {
    title: "1. Confirm Details",
    id: URL_PATHS.INVOICES.PAY_INVOICE.CONFIRM_DETAILS,
    active: false,
    completed: false,
  },
  {
    title: "2. Preview",
    id: URL_PATHS.INVOICES.PAY_INVOICE.PREVIEW_INVOICE,
    active: false,
    completed: false,
  },
  {
    title: "3. Pay",
    id: URL_PATHS.INVOICES.PAY_INVOICE.PAY_INVOICE,
    active: false,
    completed: false,
  },
  {
    title: "4. Confirmation",
    id: URL_PATHS.INVOICES.PAY_INVOICE.CONFIRMATION,
    active: false,
    completed: false,
  },
];

export const PAYMENT_METHODS: PaymentMethodType[] = [
  {
    id: 1,
    label: "Credit Card",
    caption: "Fees 6-8%",
    value: "creditCard",
    icon: "/assets/img/debit-card.png",
  },
  {
    id: 2,
    label: "Paypal",
    caption: "Fees 3-5%",
    value: "paypal",
    icon: "/assets/img/paypal.png",
  },
  {
    id: 3,
    label: "Bank Transfer",
    caption: "Fees 12-14%",
    value: "bankTransfer",
    icon: "/assets/img/bank.png",
  },
];

export const CLIENT_FEES: ClientFeesType[] = [
  {
    id: 1,
    label: "%100 of Fees",
    value: "fullFee",
    icon: "/assets/img/happy.png",
  },
  {
    id: 2,
    label: "%50 of Fees",
    value: "halfFee",
    icon: "/assets/img/happy-face.png",
  },
  {
    id: 3,
    label: "%0 of Fees",
    value: "none",
    icon: "/assets/img/sad-face.png",
  },
];
