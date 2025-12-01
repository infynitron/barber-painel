import SignUpForm from "@/modules/auth/ui/SignUpForm";
import SignUpPolicy from "@/modules/auth/ui/SignUpPolicy";

export default function SignUpComponent() {
  return (
    <div className="space-y-4">
      <SignUpForm
        onSubmit={() => {
          // TODO: Ação para submit
        }}
      />

      <SignUpPolicy />
    </div>
  );
}
