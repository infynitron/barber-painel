import FormInput from "@/integrations/tanstack-form/ui/FormInput";

interface PasswordProps {
  label: string;
  placeholder?: string;
}

export default function FormPassword(props: PasswordProps) {
  return <FormInput type="password" {...props} />;
}
