import React from 'react';
import { IntroCard } from './IntroCard';
import { useTranslation } from 'react-i18next';

export const Introduction: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-primary-dark mb-8">{t('activities.title')}</h1>
        
        <IntroCard
          title={t('activities.simplifyingComplexity.title')}
          description={t('activities.simplifyingComplexity.description')}
          imageSrc="/lovable-uploads/e1213eec-1174-40f6-b626-b040ccb3efdc.png"
          imageAlt="Learning objectives network diagram"
          imagePosition="left"
        />

        <IntroCard
          title={t('activities.personalizedMap.title')}
          description={t('activities.personalizedMap.description')}
          imageSrc="/lovable-uploads/13a6557a-3d9c-4b34-816b-70475ff6472a.png"
          imageAlt="Evaluation engine concept"
          imagePosition="right"
        />

        <IntroCard
          title={t('activities.infinitePossibilities.title')}
          description={t('activities.infinitePossibilities.description')}
          imageSrc="/lovable-uploads/4e96004e-f976-47f2-a36a-bf16063bcc18.png"
          imageAlt="Infinite possibilities concept"
          imagePosition="left"
        />

        <IntroCard
          title={t('activities.holisticLearning.title')}
          description={t('activities.holisticLearning.description')}
          imageSrc="/lovable-uploads/22f9bb3c-4e7d-463e-a152-9b4f84097f5c.png"
          imageAlt="Holistic learning concept"
          imagePosition="right"
        />
      </div>
    </section>
  );
};