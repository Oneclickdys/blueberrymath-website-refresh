import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">
          {t('cta.title')}
        </h2>
        <p className="text-xl mb-8 text-primary-light max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            {t('cta.trial')} <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full transition-all"
          >
            {t('cta.demo')}
          </Button>
        </div>
      </div>
    </section>
  );
};