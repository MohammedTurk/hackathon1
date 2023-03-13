import { URL_PATHS } from "data";
import type { VerificationMethodsListType } from "../../types";

export const VERIFICATION_METHODS: VerificationMethodsListType = [
  {
    id: 1,
    title: "Email Address *",
    caption: "",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.EMAIL,
    loading: false,
  },
  {
    id: 2,
    title: "Phone Number *",
    caption: "",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.PHONE,
    loading: false,
  },
  {
    id: 3,
    title: "ID",
    caption: "Identity card - Driver license - Passport",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.IDENTITY,
  },
  {
    id: 4,
    title: "Address",
    caption: "Utility Bill - Bank statement",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.ADDRESS,
  },
];

export const IDENTITY_DOCUMENT_OPTIONS = [
  {
    label: "Passport",
    value: "passport",
  },
  {
    label: "Driving License",
    value: "driving_license",
  },
  {
    label: "National Id",
    value: "national_id",
  },
];

export const ADDRESS_DOCUMENT_OPTIONS = [
  {
    label: "Water Bill",
    value: "water_bill",
  },
  {
    label: "Phone Bill",
    value: "phone_bill",
  },
  {
    label: "Bank Statement",
    value: "bank_statement",
  },
  {
    label: "Electricity Bill",
    value: "electricity_bill",
  },
  {
    label: "Other",
    value: "other",
  },
];
