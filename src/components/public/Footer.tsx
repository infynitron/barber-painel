import { footerData } from "@/mock";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SparklesIcon,
  TwitterIcon,
} from "lucide-react";

// TODO: Social Icons
const socialIcons: any = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-gray-950 to-black text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-primary p-2 rounded-xl">
                  <SparklesIcon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-3xl font-black">{footerData.company.name}</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {footerData.company.description}
            </p>
            <p className="text-sm text-gray-500">
              {footerData.company.tagline}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Produto</h4>
            <ul className="space-y-3">
              {footerData.links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerData.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerData.links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {footerData.social.map((social, index) => {
              const Icon = socialIcons[social.icon as any] as any;
              return (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="group w-12 h-12 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>
              © {year} {footerData.company.name}. Todos os direitos reservados.
            </p>
            <p className="mt-1">Feito com ❤️ no Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
