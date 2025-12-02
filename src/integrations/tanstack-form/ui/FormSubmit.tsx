import { SaveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useFormContext } from "@/integrations/tanstack-form";

interface EmailProps {
  label?: string;
  disabled?: boolean;
}

export default function FormSubmit(props: EmailProps) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [
        state.canSubmit,
        state.isSubmitting,
        state.isFormValid,
      ]}
    >
      {([canSubmit, isSubmitting, isFormValid]) => (
        <Button
          key={"submit_" + props.label}
          className="w-full"
          type="submit"
          disabled={
            props?.disabled || !canSubmit || isSubmitting || !isFormValid
          }
        >
          <SaveIcon />
          {props?.label || "Salvar"}
        </Button>
      )}
    </form.Subscribe>
  );
}
