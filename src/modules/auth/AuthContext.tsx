"use client";

import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { supabase } from "@/integrations/supabase/client";

import { AuthContext } from "@/modules/auth/useAuth";

import { IResult } from "@/modules/shared/shared";

import { ISignInSubmitForm } from "@/modules/auth/types/signin";
import { ISignUpSubmitForm } from "@/modules/auth/types/signup";
import { IVerifyOTPSubmitForm } from "@/modules/auth/types/otp";
import {
  IRecoveryEmailSubmitForm,
  IRecoveryPasswordSubmitForm,
} from "@/modules/auth/types/recevoery";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const signInWithPassword = async (
    body: ISignInSubmitForm
  ): Promise<IResult> => {
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password,
      });
      if (error) throw error;

      router.push("/admin");
      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      switch (error.code) {
        case "invalid_credentials":
          toast.error("E-mail ou senha incorreto!");
          break;
        case "email_not_confirmed":
          toast.error("E-mail não confirmado!");
          break;
        default:
          toast.error(
            error?.message ?? "Ocorreu um erro ao tentar fazer login!"
          );
          break;
      }
      console.error(JSON.stringify(error));

      return { error: error?.message };
    }

    return { data: undefined };
  };

  const signUpWithEmail = async (body: ISignUpSubmitForm): Promise<IResult> => {
    // TODO
    try {
      const { error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
        options: {
          data: {
            fullName: body.fullName,
          },
        },
      });
      if (error) throw error;

      router.push("/sign-up/success");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error: any) {
      // TODO: Use do code
      switch (error.message) {
        case "User already registered":
          toast.error("E-mail já está em uso!");
          break;
        default:
          toast.error(
            error?.message ?? "Ocorreu um erro ao tentar criar a conta!"
          );
          break;
      }
      console.error(JSON.stringify(error));

      return { error: error?.message };
    }

    return { data: undefined };
  };

  const signOut = async (): Promise<void> => {
    // TODO
  };

  const resetPassword = async (
    body: IRecoveryEmailSubmitForm
  ): Promise<IResult> => {
    // TODO
    try {
    } catch (error: any) {
      return { error: error?.message };
    }

    return { data: undefined };
  };

  const verifyOtp = async (body: IVerifyOTPSubmitForm): Promise<IResult> => {
    // TODO
    try {
    } catch (error: any) {
      return { error: error?.message };
    }

    return { data: undefined };
  };

  const updatePassword = async (
    body: IRecoveryPasswordSubmitForm
  ): Promise<IResult> => {
    // TODO
    try {
    } catch (error: any) {
      return { error: error?.message };
    }

    return { data: undefined };
  };

  const context = React.useMemo(() => {
    return {
      signInWithPassword,
      signUpWithEmail,
      signOut,
      resetPassword,
      verifyOtp,
      updatePassword,
    };
  }, [
    resetPassword,
    signInWithPassword,
    signOut,
    signUpWithEmail,
    updatePassword,
    verifyOtp,
  ]);

  return <AuthContext value={context}>{children}</AuthContext>;
}
