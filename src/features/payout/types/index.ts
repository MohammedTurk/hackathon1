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

  export type AddBankType = {
    code:  string;
    accountNumber: string;
    ledger: string;
    bankBranch: string;
    accountName :string
  
  }


  export type SendMobileCodeRecipientResponseType = APIResponseType<{
    mobile: string;
    idNumber: string;
  }>;
 