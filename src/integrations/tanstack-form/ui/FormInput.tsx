import { useFieldContext } from "@/integrations/tanstack-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps {
  label: string;
  type?: "email" | "checkbox" | "password";
  placeholder?: string;
}

export default function FormInput(props: InputProps) {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2">
      <Label
        id={"label-" + field.name}
        key={"label-" + field.name}
        htmlFor={"input-" + field.name}
      >
        {props.label}
      </Label>

      <Input
        name={field.name}
        value={field.state.value}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={field.handleBlur}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
      />

      {field.state.meta.errors && (
        <>
          {field.state.meta.errors.map((i, idx) => (
            <em
              key={field.name + "_error_" + idx}
              role="alert"
              className="text-red-300"
            >
              * {i?.message}
              <br />
            </em>
          ))}
        </>
      )}
    </div>
  );
}
