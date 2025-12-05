export interface IVerifyOTPSubmitForm {
  type: "recovery" | "signup";
  email: string;
  token: string;
}
