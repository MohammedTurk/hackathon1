import { forwardRef, useEffect } from "react";
import useForm, { Controller } from "lib/react-hook-form";
import { Input, Select, PhoneInput, Button } from "components";
import InvoiceDetails from "./InvoiceDetails";
import { countriesList, FORM_VALIDATION } from "data";
import { getFieldHelperText } from "utils";
import { usePayInvoice } from "../../contexts/PayInvoice";
import type {
  ConfirmDetailsProps,
  ConfirmDetailsInputsType,
} from "../../types";

const ConfirmDetails = forwardRef<HTMLButtonElement, ConfirmDetailsProps>(
  ({ onSubmit }, ref) => {
    const {
      invoiceDetails: { data, isLoading, error },
    } = usePayInvoice();
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      clearErrorOnChange,
      setValue,
    } = useForm<ConfirmDetailsInputsType>();

    const onSubmitHandler = handleSubmit((formData) => {
      const payload = {
        client: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          address: {
            city: formData.city,
            state: formData.state,
            zipCode: formData.zip,
            country: formData.country,
          },
        },
        type: data?.type || "invoice",
        hashCode: data?.invoice.hashCode || "",
      };
      onSubmit(payload);
    });

    useEffect(() => {
      if (data) {
        const {
          client: { firstName, lastName, email, mobile, address },
        } = data.invoice;
        setValue("firstName", firstName);
        setValue("lastName", lastName);
        setValue("email", email);
        setValue("mobile", mobile);
        setValue("city", address.city);
        setValue("state", address.state);
        setValue("country", address.country);
        setValue("zip", address.zipCode);
      }
    }, [data, setValue]);

    return (
      <>
        <InvoiceDetails
          details={data?.invoice}
          loading={isLoading}
          error={error}
        />
        <h2 className="mt-8 mb-6">Confirm Details</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Input
              id="first-name-input"
              label="First Name"
              placeholder="Enter first name"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("firstName", {
                ...FORM_VALIDATION.firstName,
                onChange: () => clearErrorOnChange("firstName"),
              })}
              error={!!errors.firstName}
              helperText={getFieldHelperText(
                "error",
                errors.firstName?.message
              )}
            />
            <Input
              id="last-name-input"
              label="Last Name"
              placeholder="Enter last name"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("lastName", {
                ...FORM_VALIDATION.lastName,
                onChange: () => clearErrorOnChange("lastName"),
              })}
              error={!!errors.lastName}
              helperText={getFieldHelperText("error", errors.lastName?.message)}
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Input
              id="email-input"
              label="Email"
              placeholder="Enter Email"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("email", {
                ...FORM_VALIDATION.email,
                onChange: () => clearErrorOnChange("email"),
              })}
              error={!!errors.email}
              helperText={getFieldHelperText("error", errors.email?.message)}
            />
            <Controller
              control={control}
              name="mobile"
              rules={{
                ...FORM_VALIDATION.mobile,
                onChange: () => clearErrorOnChange("mobile"),
              }}
              render={({ field: { ref, onChange, ...field } }) => (
                <PhoneInput
                  id="phone-input"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  className="flex-1 basis-full"
                  inputSize="small"
                  inputProps={{
                    ref,
                  }}
                  error={!!errors.mobile}
                  helperText={getFieldHelperText(
                    "error",
                    errors.mobile?.message
                  )}
                  onChange={(_, __, ___, value) => onChange(value)}
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Input
              id="city-input"
              label="City"
              placeholder="Enter City"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("city", {
                ...FORM_VALIDATION.city,
                onChange: () => clearErrorOnChange("city"),
              })}
              error={!!errors.city}
              helperText={getFieldHelperText("error", errors.city?.message)}
            />
            <Input
              id="state-input"
              label="State"
              placeholder="Enter State"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("state", {
                ...FORM_VALIDATION.state,
                onChange: () => clearErrorOnChange("state"),
              })}
              error={!!errors.state}
              helperText={getFieldHelperText("error", errors.state?.message)}
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Select
              options={countriesList}
              id="country-select"
              label="Country"
              placeholder="Enter Country"
              className="flex-1 basis-full"
              selectSize="small"
              {...register("country", {
                ...FORM_VALIDATION.country,
                onChange: () => clearErrorOnChange("country"),
              })}
              error={!!errors.country}
              helperText={getFieldHelperText("error", errors.country?.message)}
            />
            <Input
              id="zip-code-input"
              label="Zip Code"
              placeholder="Enter Zip Code"
              className="flex-1 basis-full"
              inputSize="small"
              {...register("zip", {
                ...FORM_VALIDATION.zipCode,
                onChange: () => clearErrorOnChange("zip"),
              })}
              error={!!errors.zip}
              helperText={getFieldHelperText("error", errors.zip?.message)}
            />
          </div>
          <Button type="submit" className="hidden" ref={ref} />
        </form>
      </>
    );
  }
);

ConfirmDetails.displayName = "ConfirmDetails";

export default ConfirmDetails;
