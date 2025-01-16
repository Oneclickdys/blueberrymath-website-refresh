import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/container';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <p>{t('about.description4')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};