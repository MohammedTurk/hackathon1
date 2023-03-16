import type { HTMLProps, FC, ReactNode, RefAttributes } from "react";
import type { ImageProps as NextImageProps } from "next/image";
import type { LinkProps as NextLinkProps } from "next/link";
import type { PhoneInputProps as ReactPhoneInputProps } from "react-phone-input-2";
import type { DivElementType, SpanElementType, ChildrenProp } from "types";
import { FieldValues } from "lib/react-hook-form/types";
import { Control, ControllerProps, Path, UseFormSetValue } from "react-hook-form";
import { WithdrawAmountType } from "features/payout/types";

//@TODO: Create custom type for the duplicated properties like: helperText etc...

type CommonFormElementsType = {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  withoutHelperText?: boolean;
};

export type SizeVariantsType = "small" | "medium" | "large";

type IconsVariantsType = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export interface CardProps extends DivElementType {}
export type CardType = FC<CardProps>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    CommonFormElementsType,
    IconsVariantsType {
  inputClassName?: string;
  inputSize?: SizeVariantsType;
  labelClassName?: string;
   focusableLabel?: boolean;
}

export interface LogoProps extends Omit<NextImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  buttonSize?: SizeVariantsType;
  fullWidth?: boolean;
  loading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}
export interface SelectProps
  extends Omit<HTMLProps<HTMLSelectElement>, "label">,
    CommonFormElementsType {
  selectClassName?: string;
  selectSize?: SizeVariantsType;
  options: { value: string; label: string }[];
}


export type SelectListBoxProps = CommonFormElementsType & {
  data: {
    _id: string;
    name: string;
    address: string;
    fees: number;
    startingHour: number;
    endingHour: string;
  }[];
  OptionType :JSX.Element
 
};


export interface HelperTextProps
  extends HTMLProps<HTMLParagraphElement>,
    IconsVariantsType {
  text?: string;
  showContent?: boolean;
}

export type HelperTextType = FC<HelperTextProps>;

export interface IconButtonProps extends ButtonProps {}

export type IconButtonType = FC<IconButtonProps>;

export interface NoSsrProps extends ChildrenProp {}

export type NoSsrType = FC<NoSsrProps>;

export interface PhoneInputProps
  extends ReactPhoneInputProps,
    CommonFormElementsType {
  inputClassName?: string;
  inputSize?: SizeVariantsType;
  className?: string;
  id?: string;
}

export type PhoneInputType = FC<PhoneInputProps>;

export interface LinkProps
  extends NextLinkProps,
    RefAttributes<HTMLAnchorElement>,
    ChildrenProp {
  className?: string;
}

export type LinkType = FC<LinkProps>;

export interface SpinnerProps {
  size?: SizeVariantsType;
  className?: string;
  svgClassName?: string;
}

export type SpinnerType = FC<SpinnerProps>;

export type ImageType = FC<NextImageProps>;

export type OnOtpChange = (value: string) => void;

interface OtpInputProps {
  onOtpChange: OnOtpChange;
  error?: boolean;
}

export type OtpInputType = FC<OtpInputProps>;

export interface FileInputProps
  extends Omit<InputProps, "type" | "startIcon" | "endIcon"> {
  id: string;
}
export interface FileInputLabelProps {
  label: React.ReactNode;
  fileList: FileList | null;
  resetFileInput: () => void;
}

export type FileInputLabelType = FC<FileInputLabelProps>;

export interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export type SvgType = FC<SvgProps>;

export type Step = {
  title: string;
  id: string;
  active: boolean;
  completed: boolean;
};

export type StepperOnChangeType = (index: number) => void;

export interface StepperProps extends ChildrenProp {
  steps: Step[];
  activeStep: number;
  onChange?: StepperOnChangeType;
}

export interface StepProps {
  step: Step;
  className?: string;
  bulletClassName?: string;
  withArrow?: boolean;
  isLastBullet: boolean;
  lastStep: Step;
}

export type StepType = FC<StepProps>;

export type StepperContextType = {
  activeStep: number;
  steps: Step[];
};

export interface StepperContentProps extends ChildrenProp {
  className?: string;
}
export type StepperContentType = FC<StepperContentProps>;

export interface StepperProgressBarProps {
  className?: string;
  barClassName?: string;
}
export type StepperProgressBarType = FC<StepperProgressBarProps>;

export interface DividerProps extends DivElementType {}
export type DividerType = FC<DividerProps>;

export interface StepperActionsProps {
  nextProps?: ButtonProps;
  backProps?: ButtonProps;
}

export type StepperActionsType = FC<StepperActionsProps>;

interface SkeletonProps extends SpanElementType {
  width?: number;
  height?: number;
  variant?: "circular" | "rectangular" | "rounded";
}

export type SkeletonType = FC<SkeletonProps>;

export interface ToggleButtonsProps extends ChildrenProp {
  value: string | undefined;
  onChange: (value: string) => void;
}

interface ToggleButtonProps extends ButtonProps {
  value: string;
}

export type ToggleButtonType = FC<ToggleButtonProps>;

export type ToggleButtonsContextType = {
  value: string | undefined;
  onChange: (value: string) => void;
};
export type RadioButtonType = {
  selected :string ;
  handleChange : (value: string) => void;
  label:string;
  className:string;
  children: JSX.Element
}