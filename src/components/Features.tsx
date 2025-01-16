import { Brain, Target, Clock, Award, LineChart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Features = () => {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const features = [
    {
      title: t('features.unlimitedResources.title'),
      description: t('features.unlimitedResources.description'),
      icon: Brain,
      backImage: "photo-1649972904349-6e44c42644a7",
      backText: t('features.unlimitedResources.extended'),
    },
    {
      title: t('features.realLifeMath.title'),
      description: t('features.realLifeMath.description'),
      icon: Target,
      backImage: "photo-1488590528505-98d2b5aba04b",
      backText: t('features.realLifeMath.extended'),
    },
    {
      title: t('features.individualizedProgress.title'),
      description: t('features.individualizedProgress.description'),
      icon: Clock,
      backImage: "photo-1581091226825-a6a2a5aee158",
      backText: t('features.individualizedProgress.extended'),
    },
    {
      title: t('features.tracking.title'),
      description: t('features.tracking.description'),
      icon: LineChart,
      backImage: "photo-1486312338219-ce68d2c6f44d",
      backText: t('features.tracking.extended'),
    },
    {
      title: t('features.pedagogicalSuggestions.title'),
      description: t('features.pedagogicalSuggestions.description'),
      icon: Lightbulb,
      backImage: "photo-1531297484001-80022131f5a1",
      backText: t('features.pedagogicalSuggestions.extended'),
    },
    {
      title: t('features.learningFromMistakes.title'),
      description: t('features.learningFromMistakes.description'),
      icon: Award,
      backImage: "photo-1487058792275-0ad4aaf24ca7",
      backText: t('features.learningFromMistakes.extended'),
    },
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
            <div 
              key={index}
              className="relative h-[300px] perspective-1000"
              onClick={() => toggleCard(index)}
            >
              <div
                className={`w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <Card 
                  className="absolute w-full h-full backface-hidden p-6 hover:shadow-lg transition-all duration-300 border-primary/10 animate-fade-up flex flex-col items-center justify-center"
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

                {/* Back of card */}
                <Card 
                  className="absolute w-full h-full backface-hidden p-6 rotate-y-180 bg-primary text-white flex flex-col items-center justify-center"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${feature.backImage}`}
                    alt={feature.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm">
                    {feature.backText}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};