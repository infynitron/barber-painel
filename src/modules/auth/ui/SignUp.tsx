import { SeparatorText } from "@/components/ui/separator-text";

import SignUpGoogle from "@/modules/auth/ui/SignUpGoogle";
import SignUpForm from "@/modules/auth/ui/SignUpForm";
import SignUpPolicy from "@/modules/auth/ui/SignUpPolicy";

export default function SignUpComponent() {
  return (
    <div className="space-y-4">
      <SignUpGoogle />

      <SeparatorText text="ou" />

      <SignUpForm />

      <SignUpPolicy />
    </div>
  );
}
