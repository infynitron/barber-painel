import SignInForm from "@/modules/auth/ui/SignInForm";

export default function SignInComponent() {
  return (
    <div className="space-y-4">
      <SignInForm
        onSubmit={() => {
          // TODO: Ação para submit
        }}
      />
    </div>
  );
}
