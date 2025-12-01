"use client";

import React from "react";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { GoogleIcon } from "@/icons";

import { supabase } from "@/integrations/supabase/client";

export default function SignWithGoogle() {
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);

  const handleSignUpWithGoogle = async () => {
    setIsGoogleLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) {
      console.error(error);
      toast.error(
        error.message ?? "Ocorreu um erro ao tentar fazer login com o Google"
      );
    }

    setIsGoogleLoading(false);
  };

  return (
    <Button
      className="flex mx-auto"
      type="button"
      variant="outline"
      disabled={isGoogleLoading}
      onClick={handleSignUpWithGoogle}
    >
      {isGoogleLoading ? (
        <LoaderIcon className="animate-spin size-5" />
      ) : (
        <GoogleIcon />
      )}
      Continue com o Google
    </Button>
  );
}
