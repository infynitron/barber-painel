"use client";

import React from "react";
import { MenuIcon, XIcon, SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { navigationItems } from "@/mock";

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl shadow-lg border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

              {/* Icon background */}
              <div className="relative bg-gradient-to-r from-primary to-primary p-2 rounded-xl">
                <SparklesIcon className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            <div>
              <h1
                className={`text-2xl font-bold transition-all duration-300 ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                Infynitron Agenda
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  scrolled
                    ? "text-gray-300 hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
                key={index}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className={
                scrolled
                  ? "text-gray-300 hover:text-primary"
                  : "text-white hover:text-primary"
              }
              variant="ghost"
            >
              <a
                href="https://wa.me/5542999027693?text=Olá!%20Quero%20entrar%20na%20plataforma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar
              </a>
            </Button>

            <Button
              asChild
              className={
                scrolled
                  ? "text-gray-300 hover:text-primary"
                  : "text-white hover:text-primary"
              }
              variant="ghost"
            >
              <a
                href="https://wa.me/5542999027693?text=Olá!%20Quero%20entrar%20na%20plataforma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cadastrar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className={scrolled ? "text-gray-300" : "text-white"} />
            ) : (
              <MenuIcon className={scrolled ? "text-gray-300" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-background rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              {navigationItems.map((item, index) => (
                <a
                  className="text-gray-300 hover:text-primary font-medium"
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80">
                Teste Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
