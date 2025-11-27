import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import FormSubmit from "@/integrations/tanstack-form/ui/FormSubmit";

import FormInput from "@/integrations/tanstack-form/ui/FormInput";
import FormPassword from "@/integrations/tanstack-form/ui/FormPassword";
import FormEmail from "@/integrations/tanstack-form/ui/FormEmail";

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormInput,
    FormPassword,
    FormEmail,
  },
  formComponents: {
    FormSubmit,
  },
});

export { useAppForm, useFieldContext, useFormContext };
