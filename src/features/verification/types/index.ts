import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";
import type { UserType, APIResponseType } from "types";

interface VerificationCardProps extends CardProps {
  title: string;
  description?: string;
  imgSrc?: string;
  caption?: ReactNode;
}
export type VerificationCardType = FC<VerificationCardProps>;

export type VerificationMethodsUrlType =
  | "/verification/email"
  | "/verification/phone"
  | "/verification/identity"
  | "/verification/address";

export type VerificationMethodsListType = {
  id: number;
  title: string;
  caption: string;
  status: "Verified" | "Not verified" | "Pending" | "Rejected";
  url: VerificationMethodsUrlType;
  loading?: boolean;
}[];

export type VerifyEmailFormPayloadType = {
  verificationCode: string;
};

export type VerifyEmailResponseType = APIResponseType;

export type SendEmailCodeResponseType = APIResponseType<{
  _id: string;
  email: string;
}>;

export type SendMobileCodeResponseType = APIResponseType<{
  _id: string;
  mobile: string;
}>;

interface VerifiedSuccessProps {
  description: string;
}
export type VerifiedSuccessType = FC<VerifiedSuccessProps>;

export type VerifyMobileFormPayloadType = VerifyEmailFormPayloadType;

export type VerifyMobileResponseType = APIResponseType;

export type VerifyIdentityFormInputsType = {
  file: FileList;
  idNumber: string;
  idDocumentType: string;
};

export type VerifyIdentityResponseType = APIResponseType<null>;

export type VerifyAddressFormInputsType = {
  file: FileList;
  address1: string;
  address2: string;
  city: string;
  addressDocumentType: string;
  country: string;
};

export type VerifyAddressResponseType = APIResponseType<null>;
