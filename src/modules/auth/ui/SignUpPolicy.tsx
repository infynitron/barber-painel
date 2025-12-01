import Link from "next/link";

// TODO: Policy
// TODO: Terms
export default function SignUpPolicy() {
  return (
    <div className="text-xs text-center text-muted-foreground">
      Ao clicar em continuar, você concordo com os nosso{" "}
      <Link className="text-primary hover:underline" href="/">
        Termos de Uso
      </Link>{" "}
      e{" "}
      <Link className="text-primary hover:underline" href="/">
        Política de Privacidade
      </Link>
      .
    </div>
  );
}
