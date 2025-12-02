"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Zap } from "lucide-react";
import { heroData } from "@/mock";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background"
    >
      <style>{`
  @keyframes glowPulse {
    0%, 100% {
      text-shadow: 0 0 3px #fbbf24;
      filter: brightness(1);
    }
    50% {
      text-shadow: 
        0 0 8px #fbbf24,
        0 0 15px #fde68a;
      filter: brightness(1.05);
    }
  }

  .shimmer-text {
    color: #fbbf24;
    display: block;
    animation: glowPulse 2s ease-in-out infinite;
    font-weight: 900;
  }
`}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs with animation */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-xl border border-primary/30 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-primary">
            {heroData.badge}
          </span>
          <TrendingUp className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="block text-foreground">
            Transforme agendamentos em
          </span>
          <span className="block shimmer-text">experiências incríveis</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          {heroData.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="group relative px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {heroData.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group px-10 py-7 text-lg font-bold border-2 border-primary/50 text-foreground hover:border-primary hover:text-primary rounded-2xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-xl"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {heroData.ctaSecondary}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {heroData.stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black text-primary">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute bottom-10 left-10 w-20 h-20 bg-primary/30 rounded-2xl animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/25 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 right-40 w-12 h-12 bg-primary/20 rounded-xl animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
