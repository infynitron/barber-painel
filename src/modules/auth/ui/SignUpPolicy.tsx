import Link from "next/link";

import { Input } from "@/components/ui/input";

// TODO: Policy
// TODO: Terms
// TODO: Check obrigatório
export default function SignUpPolicy() {
  return (
    <div className="flex text-xs text-gray-600 space-x-2">
      <div className="flex justify-center items-center">
        <Input className="h-3" type="checkbox" required />
      </div>

      <label htmlFor="termsAccepted">
        Li e concordo com os{" "}
        <Link className="text-primary hover:underline" href="/">
          Termos de Uso
        </Link>{" "}
        e{" "}
        <Link className="text-primary hover:underline" href="/">
          Política de Privacidade
        </Link>
        .
      </label>
    </div>
  );
}
