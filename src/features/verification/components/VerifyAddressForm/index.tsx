import { Button, Select, Input, FileInput, HelperText } from "components";
import useForm from "lib/react-hook-form";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, countriesList } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "utils";
import { ADDRESS_DOCUMENT_OPTIONS, formValidation } from "../../data";
import type {
  VerifyAddressFormInputsType,
  VerifyAddressResponseType,
} from "../../types";

export const VerifyAddressForm = ({ onVerify }: { onVerify: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
  } = useForm<VerifyAddressFormInputsType>();

  const {
    fetchData: verifyAddress,
    error,
    loading,
  } = useAxios<VerifyAddressResponseType, FormData>({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.ADDRESS,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: () => {
      onVerify();
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("addressDocumentType", data.addressDocumentType);
    formData.append("address1", data.address1);
    formData.append("address2", data.address2);
    formData.append("city", data.city);
    formData.append("country", data.country);
    verifyAddress(formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <Select
        options={ADDRESS_DOCUMENT_OPTIONS}
        id="document-select"
        label="Document Type"
        placeholder="Choose your document type"
        selectSize="small"
        {...register("addressDocumentType", {
          ...formValidation.documentType,
          onChange: () => clearErrorOnChange("addressDocumentType"),
        })}
        error={!!errors.addressDocumentType}
        helperText={getFieldHelperText(
          "error",
          errors.addressDocumentType?.message
        )}
      />
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="address-1-input"
          label="Address 1"
          placeholder="Neighborhood"
          className="flex-1 basis-full"
          inputSize="small"
          {...register("address1", {
            ...formValidation.address1,
            onChange: () => clearErrorOnChange("address1"),
          })}
          error={!!errors.address1}
          helperText={getFieldHelperText("error", errors.address1?.message)}
        />
        <Input
          id="address-2-input"
          label="Address 2"
          placeholder="Street"
          className="flex-1 basis-full"
          inputSize="small"
          {...register("address2", {
            ...formValidation.address2,
            onChange: () => clearErrorOnChange("address2"),
          })}
          error={!!errors.address2}
          helperText={getFieldHelperText("error", errors.address2?.message)}
        />
      </div>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="city-input"
          label="City"
          placeholder="Enter your city"
          className="flex-1 basis-full"
          inputSize="small"
          {...register("city", {
            ...formValidation.city,
            onChange: () => clearErrorOnChange("city"),
          })}
          error={!!errors.city}
          helperText={getFieldHelperText("error", errors.city?.message)}
        />
        <Select
          options={countriesList}
          id="country-select"
          label="Country"
          placeholder="Enter Country"
          className="flex-1 basis-full"
          selectSize="small"
          {...register("country", {
            ...formValidation.country,
            onChange: () => clearErrorOnChange("country"),
          })}
          error={!!errors.country}
          helperText={getFieldHelperText("error", errors.country?.message)}
        />
      </div>
      <FileInput
        id="document-file"
        inputSize="small"
        {...register("file", {
          ...formValidation.file,
          onChange: () => clearErrorOnChange("file"),
        })}
        error={!!errors.file}
        helperText={getFieldHelperText(
          errors.file ? "error" : "info",
          errors.file?.message || "Your document shouldn't be three months old"
        )}
      />
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading.." : "Continue"}
      </Button>
    </form>
  );
};

export default VerifyAddressForm;
