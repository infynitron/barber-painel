import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Barber <span className="text-primary">Premium</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tradição e modernidade em cuidados masculinos de excelência.
            </p>
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horário
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Segunda - Sexta: 9h - 20h</p>
              <p>Sábado: 9h - 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <p>(11) 9999-9999</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <p>contato@barberpremium.com</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-primary hover:text-primary-foreground" />
                </a>
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
            © 2024 Barber Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
