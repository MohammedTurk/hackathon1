import type { FC } from "react";
import type { StepperActionsProps, Step } from "components/types";
import type { APIResponseType, Children } from "types";

interface PayInvoiceLayoutProps extends StepperActionsProps {
  className?: string;
  cardClassName?: string;
  children: Children;
}

export type PayInvoiceLayoutType = FC<PayInvoiceLayoutProps>;

export interface ConfirmDetailsProps {
  onSubmit: (data: CompleteClientInvoiceArgType) => void;
}

export type ConfirmDetailsInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export type PayInvoiceStepsType = Step[];

export type PaymentMethodValue = "creditCard" | "paypal" | "bankTransfer";

export type ClientFeesValue = "fullFee" | "halfFee" | "none";

export type PaymentMethodType = {
  id: number;
  label: string;
  caption: string;
  value: PaymentMethodValue;
  icon: string;
};

export type ClientFeesType = Omit<PaymentMethodType, "value" | "caption"> & {
  value: ClientFeesValue;
};

export interface PayInvoiceStateProps {
  children: Children;
}

export type PayInvoiceStateType = FC<PayInvoiceStateProps>;

export type UpdateInvoiceHandler = (intent: "next" | "back") => void;

export type PayInvoiceContextType = {
  invoiceId: string | undefined;
  stepsData: {
    steps: PayInvoiceStepsType;
    updateStepsHandler: UpdateInvoiceHandler;
    activeStepIndex: number;
    isLastStep: boolean;
  };
  invoiceDetails: {
    data: InvoiceDetailsData | undefined | null;
    isLoading: boolean;
    error: string;
  };
};

export type ClientType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: {
    country: string;
    city: string;
    state: string;
    zipCode: string;
  };
};

export type FreelancerType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type InvoiceItemType = {
  _id: string;
  itemName: string;
  description: string;
  price: number;
};

type InvoiceStatusType = "unpaid" | "paid";

export type InvoiceType = {
  _id: string;
  client: ClientType;
  fixed: InvoiceItemType[];
  freelancer?: FreelancerType;
  subTotal: number;
  hashCode: string;
  status: InvoiceStatusType;
};

type InvoiceVariantType = "invoice" | "service";

export type InvoiceDetailsData = {
  invoice: InvoiceType;
  type: InvoiceVariantType;
};

export type InvoiceDetailsResponse = APIResponseType<InvoiceDetailsData>;

interface InvoiceDetailsProps {
  details: InvoiceType | undefined;
  loading: boolean;
  error: string | undefined;
}

export type InvoiceDetailsType = FC<InvoiceDetailsProps>;

export type CompleteClientInvoiceArgType = {
  client: Omit<ClientType, "_id">;
  type: InvoiceVariantType;
  hashCode: string;
};

export type CompleteClientInvoiceResponse = APIResponseType<{
  invoiceId: string;
}>;

type JobType = "fixed" | "hourly";

export type InvoicePreviewData = {
  _id: string;
  client: ClientType;
  jobType: JobType;
  currency: string;
  fixed: InvoiceItemType[];
  subTotal: number;
  hashCode: string;
  invoiceNo: string;
  status: InvoiceStatusType;
  createdAt: string;
  updatedAt: string;
  paymentDetails: string;
  otherPaymentMethod: null; // for now
  paymentMethod: null; // for now
};

export type InvoicePreviewResponse = APIResponseType<InvoicePreviewData>;

export type PaymentOptionFee = {
  fullFee: number;
  halfFee: number;
  none: number;
};

export type PaymentOptionsData = {
  currency: string;
  stripeOptionFee: PaymentOptionFee;
  paypalOptionFee: PaymentOptionFee;
};

export type PaymentOptionsResponse = APIResponseType<PaymentOptionsData>;

export type CreateStripeSessionArgType = {
  invoiceId: string;
  paymentOption: ClientFeesValue;
};

export type CreateStripeSessionResponse = APIResponseType<{
  url: string;
}>;

interface PaymentProps {
  paymentMethod: PaymentMethodValue | undefined;
  updatePaymentMethod: React.Dispatch<
    React.SetStateAction<PaymentMethodValue | undefined>
  >;
  clientFee: ClientFeesValue | undefined;
  updateClientFee: React.Dispatch<
    React.SetStateAction<ClientFeesValue | undefined>
  >;
  currency: string | undefined;
  paymentOptionFee: PaymentOptionFee | undefined;
}

export type PaymentType = FC<PaymentProps>;
