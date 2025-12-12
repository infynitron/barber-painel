"use client";

import React from "react";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems } from "@/mock";

/**
 * Logo SVG inline — estilo geométrico / hexagonal, dourado metálico,
 * glow sutil. Aceita className para controlar altura (h-12, h-14, etc).
 */
const Logo = ({ className = "h-12 w-auto", title = "Infynitron Agenda" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f7e18c" />
          <stop offset="0.45" stopColor="#f1c94f" />
          <stop offset="1" stopColor="#b88715" />
        </linearGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="facetGradA" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fff6d6" stopOpacity="0.9" />
          <stop offset="1" stopColor="#d9a82c" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="facetGradB" x1="1" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffd86a" stopOpacity="0.95" />
          <stop offset="1" stopColor="#b17a12" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* subtle outer glow */}
      <g filter="url(#softGlow)">
        {/* base hexagon */}
        <polygon
          points="64,6 102,26 102,70 64,92 26,70 26,26"
          fill="url(#goldGrad)"
          opacity="0.95"
        />

        {/* inner crystal facets */}
        <polygon points="64,14 94,30 64,62 34,30" fill="url(#facetGradA)" />
        <polygon points="64,62 94,30 94,70 64,92" fill="url(#facetGradB)" />
        <polygon
          points="34,30 64,62 64,92 34,70"
          fill="url(#facetGradB)"
          opacity="0.95"
        />

        {/* small shine */}
        <path
          d="M80 22 L88 28 L78 36"
          stroke="#fff8c8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </g>
    </svg>
  );
};

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
          {/* Logo + Name */}
          <div className="flex items-center gap-4 cursor-pointer">
            {/* Ajuste aqui a altura da logo: h-12, h-14, h-16 conforme desejar */}
            <Logo className="h-14 w-auto" />

            <h1
              className={`text-xl font-bold transition-all duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              Infynitron Agenda
            </h1>
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
