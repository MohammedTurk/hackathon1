import { VALIDATION_RULES } from "data";

export const formValidation = {
  documentType: {
    required: "Document type is required",
  },
  idNumber: {
    required: "ID Number is required",
    pattern: {
      value: VALIDATION_RULES.isNumber,
      message: "Should be a number",
    },
  },
  file: {
    required: "File is required",
    validate: (value: FileList) => {
      const is2MBMax = value[0].size <= 2000000;
      return is2MBMax || "Your file is too big must be 2 MP maximum";
    },
  },
  address1: {
    required: "Address 1 is required",
  },
  address2: {
    required: "Address 2 is required",
  },
  city: {
    required: "City is required",
  },
  country: {
    required: "Country is required",
  },
} as const;
