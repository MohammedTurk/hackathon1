import { APIResponseType } from "types";

export type WithdrawAmountType = {
    amount: number;
    recipient:string;
    office:string;

  };

  export type AddRecipientType = {
    code:  string;
    mobile: string;
    idNumber: string;
    name: string;
  }


  export type SendMobileCodeRecipientResponseType = APIResponseType<{
    mobile: string;
    idNumber: string;
  }>;
 