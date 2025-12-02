"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { navigationItems } from '@/mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl shadow-lg border-gray-200'
          : 'bg-transparent'
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
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            <div>
              <h1
                className={`text-2xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent ${
                  !scrolled && 'text-white bg-none'
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
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-300 hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className={
                scrolled
                  ? 'text-gray-300 hover:text-primary'
                  : 'text-white hover:text-primary'
              }
            >
              Entrar
            </Button>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg hover:shadow-primary/50 transition-all duration-200 hover:scale-105">
              Teste Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-gray-300' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-300' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-background rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-primary font-medium"
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
