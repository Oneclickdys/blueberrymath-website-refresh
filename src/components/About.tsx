import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary-dark text-center">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <p>{t('about.description4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};