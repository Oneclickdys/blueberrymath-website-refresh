import { Brain, Target, Clock, Award, LineChart, Lightbulb } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { CardFront } from "./feature/CardFront";

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.unlimitedResources.title'),
      description: t('features.unlimitedResources.description'),
      icon: Brain,
    },
    {
      title: t('features.realLifeMath.title'),
      description: t('features.realLifeMath.description'),
      icon: Target,
    },
    {
      title: t('features.individualizedProgress.title'),
      description: t('features.individualizedProgress.description'),
      icon: Clock,
    },
    {
      title: t('features.tracking.title'),
      description: t('features.tracking.description'),
      icon: LineChart,
    },
    {
      title: t('features.pedagogicalSuggestions.title'),
      description: t('features.pedagogicalSuggestions.description'),
      icon: Lightbulb,
    },
    {
      title: t('features.learningFromMistakes.title'),
      description: t('features.learningFromMistakes.description'),
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            {t('features.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <CardFront
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};