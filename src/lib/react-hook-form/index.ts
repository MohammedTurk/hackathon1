import { useForm, Controller } from "react-hook-form";
import type { FieldValues, UseFormProps, FieldNames } from "./types";

const useCustomForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  props?: UseFormProps<TFieldValues, TContext>
) => {
  const defaultProps: UseFormProps<TFieldValues, TContext> = props
    ? { ...props, reValidateMode: props.reValidateMode || "onSubmit" }
    : { reValidateMode: "onSubmit" };

  const formData = useForm<TFieldValues, TContext>(defaultProps);

  const clearErrorOnChange = (name: FieldNames<TFieldValues>) => {
    formData.clearErrors(name);
  };

  return { ...formData, clearErrorOnChange };
};

export default useCustomForm;

export { Controller };
