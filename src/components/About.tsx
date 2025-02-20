import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/container';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();
  const description = t('about.description', { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-gray-05">
            {description.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};