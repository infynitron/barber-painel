"use client";

import React from "react";
import { LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { GoogleIcon } from "@/icons";

export default function SignUpGoogle() {
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);

  return (
    <Button type="button" variant="outline" className="flex mx-auto">
      {isGoogleLoading ? (
        <LoaderIcon className="animate-spin size-5" />
      ) : (
        <GoogleIcon />
      )}
      Continue com o Google
    </Button>
  );
}
