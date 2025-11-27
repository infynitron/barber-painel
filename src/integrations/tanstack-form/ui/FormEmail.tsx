import FormInput from "@/integrations/tanstack-form/ui/FormInput";

interface EmailProps {
  label: string;
  placeholder?: string;
}

export default function FormEmail(props: EmailProps) {
  return <FormInput type="email" {...props} />;
}
