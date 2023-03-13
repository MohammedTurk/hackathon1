import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";
import type { UserType, APIResponseType } from "types";

interface RegistrationCardProps extends CardProps {
  formTitle?: string;
  formCaption?: ReactNode;
  withBackButton?: boolean;
}
export type RegistrationCardType = FC<RegistrationCardProps>;

export type SignInFormInputsType = {
  email: string;
  password: string;
};

export type SignUpFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  country: string;
};

export type AuthResponseType = {
  accessToken: string;
  refreshToken: string;
  user: UserType;
};

export type SignInResponseType = APIResponseType<AuthResponseType>;

export type SignUpResponseType = APIResponseType<AuthResponseType>;

export type ForgotPasswordFormInputType = {
  email: string;
};

export type ForgotPasswordResponseType = APIResponseType<{ _id: string }>;

export type VerifyCodeFormPayloadType = {
  _id: string;
  verificationCode: string;
};

export type VerifyCodeResponseType = APIResponseType<{ recoverToken: string }>;

export type NewPasswordFormInputsType = {
  password: string;
  rePassword: string;
};

export type NewPasswordResponseType = APIResponseType;

export type NewPasswordFormPayloadType = {
  password: string;
  recoverToken: string;
};

interface NewPasswordFormProps {
  onSuccess: () => void;
}
export type NewPasswordFormType = FC<NewPasswordFormProps>;
