import { Button, Select, Input, FileInput } from "components";
import useForm from "lib/react-hook-form";
import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import { getFieldHelperText } from "utils";
import { IDENTITY_DOCUMENT_OPTIONS, formValidation } from "../../data";
import type {
  VerifyIdentityFormInputsType,
  VerifyIdentityResponseType,
} from "../../types";

export const VerifyIdentityForm = ({ onVerify }: { onVerify: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
  } = useForm<VerifyIdentityFormInputsType>();

  const {
    fetchData: verifyIdentity,
    error,
    loading,
  } = useAxios<VerifyIdentityResponseType, FormData>({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.IDENTITY,
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
    formData.append("idNumber", data.idNumber);
    formData.append("idDocumentType", data.idDocumentType);

    verifyIdentity(formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <Select
        options={IDENTITY_DOCUMENT_OPTIONS}
        id="document-select"
        label="Document Type"
        placeholder="Choose your document type"
        selectSize="small"
        {...register("idDocumentType", {
          ...formValidation.documentType,
          onChange: () => clearErrorOnChange("idDocumentType"),
        })}
        error={!!errors.idDocumentType}
        helperText={getFieldHelperText("error", errors.idDocumentType?.message)}
      />
      <Input
        id="id-input"
        label="ID Number"
        placeholder="Enter your ID number"
        inputSize="small"
        {...register("idNumber", {
          ...formValidation.idNumber,
          onChange: () => clearErrorOnChange("idNumber"),
        })}
        error={!!errors.idNumber}
        helperText={getFieldHelperText("error", errors.idNumber?.message)}
      />
      <FileInput
        id="document-file"
        inputSize="small"
        {...register("file", {
          ...formValidation.file,
          onChange: () => clearErrorOnChange("file"),
        })}
        error={!!errors.file}
        helperText={getFieldHelperText(
          "error",
          errors.file?.message || error?.message
        )}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading.." : "Continue"}
      </Button>
    </form>
  );
};

export default VerifyIdentityForm;
