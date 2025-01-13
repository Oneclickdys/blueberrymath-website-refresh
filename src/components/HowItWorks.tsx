import { ArrowRight, UserPlus, ClipboardCheck, GraduationCap } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "1",
      title: t('howItWorks.steps.signup.title'),
      description: t('howItWorks.steps.signup.description'),
      icon: UserPlus,
    },
    {
      number: "2",
      title: t('howItWorks.steps.assessment.title'),
      description: t('howItWorks.steps.assessment.description'),
      icon: ClipboardCheck,
    },
    {
      number: "3",
      title: t('howItWorks.steps.learning.title'),
      description: t('howItWorks.steps.learning.description'),
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex-1 flex flex-col items-center text-center animate-fade-up relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">
                {step.title}
              </h3>
              <p className="text-neutral">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-primary absolute -right-4 top-8 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};