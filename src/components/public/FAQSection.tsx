"use client";

import React from "react";
import { ChevronDownIcon, HelpCircleIcon } from "lucide-react";

import { faqData } from "@/mock";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 rounded-full mb-6">
            <HelpCircleIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              PERGUNTAS FREQUENTES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Dúvidas?</span>
            <br />
            <span className="text-primary">Temos as respostas</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-muted"
              >
                <span className="text-xl font-bold text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-4">
            Não encontrou sua resposta?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-lg transition-colors"
          >
            <a
              href="https://wa.me/5542999027693?text=Olá!%20Preciso%20de%20ajuda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Fale com nosso time
              <span>›</span>
            </a>

            <ChevronDownIcon className="w-5 h-5 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
