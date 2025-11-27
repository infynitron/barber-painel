import Link from "next/link";

import {
  ClockIcon,
  MapPin,
  PhoneIcon,
  MailIcon,
  // TODO: Uso de lib atual
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import settings from "@/data";

const social = [
  { Icon: Instagram, href: settings.social.instagram },
  { Icon: Facebook, href: settings.social.facebook },
  { Icon: Youtube, href: settings.social.youtube },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="animate-in zoom-in">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Barbearia <span className="text-primary">{settings.name}</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {settings.description}
            </p>
          </div>

          {/* Hours */}
          <div className="animate-in zoom-in">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-primary" />
              Horário
            </h3>

            <div className="space-y-2 text-muted-foreground">
              {settings.hours.split("|").map((hour, i) => (
                <p key={i}>{hour.trim()}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="animate-in zoom-in">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p>{settings.contact.address}</p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <p>{settings.contact.phone}</p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MailIcon className="w-5 h-5 text-primary" />
                <p>{settings.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="animate-in zoom-in">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Redes Sociais
            </h3>

            <div className="flex gap-4">
              {social.map(({ Icon, href }, i) => (
                <Link
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  key={i}
                  href={href}
                  target="_blank"
                >
                  <Icon className="w-5 h-5 text-primary hover:text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-8 h-64 bg-muted rounded-lg overflow-hidden animate-fade-in">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <MapPin className="w-8 h-8 text-primary mr-2" />
            <span>Mapa interativo aqui</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 {settings.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
