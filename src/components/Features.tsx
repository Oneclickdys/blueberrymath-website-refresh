import { Brain, Target, Clock, Award, LineChart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

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
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-neutral-dark">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};