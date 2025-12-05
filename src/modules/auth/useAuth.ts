import React from "react";

import { IResult } from "@/modules/shared/shared";

import { ISignInSubmitForm } from "@/modules/auth/types/signin";
import { ISignUpSubmitForm } from "@/modules/auth/types/signup";
import { IVerifyOTPSubmitForm } from "@/modules/auth/types/otp";
import {
  IRecoveryEmailSubmitForm,
  IRecoveryPasswordSubmitForm,
} from "@/modules/auth/types/recevoery";

interface AuthContextType {
  signInWithPassword: (body: ISignInSubmitForm) => Promise<IResult>;
  signUpWithEmail: (body: ISignUpSubmitForm) => Promise<IResult>;
  signOut: () => Promise<void>;
  resetPassword: (body: IRecoveryEmailSubmitForm) => Promise<IResult>;
  updatePassword: (body: IRecoveryPasswordSubmitForm) => Promise<IResult>;
  verifyOtp: (body: IVerifyOTPSubmitForm) => Promise<IResult>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuth = () => React.use(AuthContext);
