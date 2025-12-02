"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react';
import { heroData } from '@/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs with animation */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {heroData.badge}
          </span>
          <TrendingUp className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="block text-gray-900">{heroData.title}</span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            {heroData.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          {heroData.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="group relative px-10 py-7 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {heroData.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group px-10 py-7 text-lg font-bold border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600 rounded-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-xl"
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
              className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 right-40 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
    </section>
  );
};

export default HeroSection;