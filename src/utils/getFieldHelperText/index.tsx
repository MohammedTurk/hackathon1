import { HelperText } from "components";
import {
  CheckCircleIconMini,
  ErrorIconMini,
  InformationCircleIconMini,
} from "lib/@heroicons";

export const getFieldHelperText = (
  status: "success" | "error" | "info" = "error",
  message?: string
) => {
  let helperTextClassName = "text-red";
  let helperTextIcon = <ErrorIconMini className="w-5 h-5" />;

  if (status === "success") {
    helperTextClassName = ""; // maybe green
    helperTextIcon = <CheckCircleIconMini className="w-5 h-5 text-green-600" />;
  }

  if (status === "info") {
    helperTextClassName = "";
    helperTextIcon = <InformationCircleIconMini className="w-5 h-5" />;
  }

  return (
    <HelperText
      showContent={!!message}
      className={helperTextClassName}
      startIcon={helperTextIcon}
      text={message}
    />
  );
};

export default getFieldHelperText;
