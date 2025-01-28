import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const { t, i18n } = useTranslation();

  // Get the trial URL based on current language
  const getTrialUrl = () => {
    const lang = i18n.resolvedLanguage;
    return `https://www.blueberrymath.ai/${lang}/school-free-trial`;
  };

  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-light">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={getTrialUrl()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-2"
              >
                {t("buttons.trial.text")} <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a
              href={t("buttons.video.url")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-full transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" /> {t("buttons.video.text")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};