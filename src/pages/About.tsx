import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('aboutPage.meta.title')}</title>
        <meta name="description" content={t('aboutPage.meta.description')} />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                {t('aboutPage.title')}
              </h2>
              <div className="space-y-6 text-lg text-neutral-dark">
                <p>
                  {t('aboutPage.content.poweredBy')}{" "}
                  <a 
                    href="https://oneclick.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Oneclick
                  </a>
                </p>
                <p>{t('aboutPage.content.oneclickDescription')}</p>
                <p>{t('aboutPage.content.innovation')}</p>
                <p>{t('aboutPage.content.expertise')}</p>
                <p>{t('aboutPage.content.passion')}</p>
                <p>{t('aboutPage.content.learning')}</p>
                <p>{t('aboutPage.content.birth')}</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default About;