import { Suspense } from "react";

import Logo from "@/components/Logo";

import { AuthButton } from "@/modules/auth/ui/AuthButton";

interface IMenuItem {
  id: string;
  label: string;
}

const menuItems: IMenuItem[] = [
  { id: "hero", label: "Home" },
  { id: "contact", label: "Contato" },
];

// TODO: Menu mobile
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Suspense>
            <AuthButton />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
