import { BookOpen, Users, ChartBar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export const TeacherSupport = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('teacherSupport.curriculum.title'),
      description: t('teacherSupport.curriculum.description'),
      icon: BookOpen,
    },
    {
      title: t('teacherSupport.experience.title'),
      description: t('teacherSupport.experience.description'),
      icon: Users,
    },
    {
      title: t('teacherSupport.monitoring.title'),
      description: t('teacherSupport.monitoring.description'),
      icon: ChartBar,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            {t('teacherSupport.title')}
          </h2>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto mb-12">
            {t('teacherSupport.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
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