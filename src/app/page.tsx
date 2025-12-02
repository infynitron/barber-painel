import Header from "@/components/public/Header";
import HeroSection from "@/components/public/HeroSection";
import FeaturesSection from "@/components/public/FeaturesSection";
import Footer from "@/components/public/Footer";
import BenefitsSection from '@/components/public/BenefitsSection';
import PricingSection from '@/components/public/PricingSection';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import FAQSection from '@/components/public/FAQSection';
import CTASection from '@/components/public/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      </main>

      <Footer />
    </div>
  );
}
