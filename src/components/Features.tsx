import { Brain, Target, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.aiLearning.title'),
      description: t('features.aiLearning.description'),
      icon: Brain,
    },
    {
      title: t('features.personalizedPractice.title'),
      description: t('features.personalizedPractice.description'),
      icon: Target,
    },
    {
      title: t('features.instantFeedback.title'),
      description: t('features.instantFeedback.description'),
      icon: Clock,
    },
    {
      title: t('features.provenResults.title'),
      description: t('features.provenResults.description'),
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            {t('features.title')}
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-neutral">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};