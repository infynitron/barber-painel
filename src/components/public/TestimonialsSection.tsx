"use client";

import { StarIcon, QuoteIcon } from "lucide-react";
import { testimonialsData } from "@/mock";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section
      className="py-32 bg-gradient-to-br from-background to-card relative overflow-hidden"
      id="depoimentos"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-bold text-primary">AVALIAÇÕES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Nossos clientes</span>
            <br />
            <span className="text-primary">contam suas histórias</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mais de 50.000 empresas já transformaram seus negócios com nossa
            plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-card border-2 border-border hover:border-primary shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <QuoteIcon className="w-20 h-20 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-bold text-primary">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-primary group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm font-semibold mb-6">
            EMPRESAS QUE CONFIAM EM NÓS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {[
              "Empresa A",
              "Empresa B",
              "Empresa C",
              "Empresa D",
              "Empresa E",
            ].map((company, i) => (
              <div
                key={i}
                className="text-2xl font-black text-muted-foreground"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
