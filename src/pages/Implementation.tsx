import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const Implementation = () => {
  const { t, i18n } = useTranslation();

  const getGuideLink = () => {
    switch (i18n.language) {
      case 'es':
        return 'https://oneclickes.notion.site/Gu-a-para-el-docente-8c437fd7e6fb4d23a9a48d0128111f6d';
      case 'pt':
        return 'https://oneclickes.notion.site/Guia-do-professor-0505883892cf417aa42c35037a3b0d3e?pvs=74';
      default:
        return 'https://oneclickes.notion.site/Teacher-s-Guide-17860d32cd4f4506a525c8886413d123?pvs=74';
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('implementation.title')} - Blueberry Math</title>
        <meta 
          name="description" 
          content={t('implementation.subtitle')}
        />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary-dark mb-6">
              {t('implementation.title')}
            </h1>
            <p className="text-lg text-neutral-dark mb-12">
              {t('implementation.subtitle')}
            </p>

            {/* Implementation Steps */}
            <div className="grid gap-8 mt-8 text-left">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {t('implementation.steps.signup.title')}
                  </h3>
                  <p className="text-neutral-dark">
                    {t('implementation.steps.signup.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {t('implementation.steps.createClass.title')}
                  </h3>
                  <p className="text-neutral-dark">
                    {t('implementation.steps.createClass.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {t('implementation.steps.start.title')}
                  </h3>
                  <p className="text-neutral-dark">
                    {t('implementation.steps.start.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guides and FAQ Section */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              {t('implementation.guidesAndFaq')}
            </h2>
            
            <div className="space-y-8">
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-lg p-6">
                <AccordionItem value="devices">
                  <AccordionTrigger className="text-primary-dark hover:text-primary">
                    {t('implementation.faqs.devices.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-dark">
                    {t('implementation.faqs.devices.answer')}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="browsers">
                  <AccordionTrigger className="text-primary-dark hover:text-primary">
                    {t('implementation.faqs.browsers.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-dark">
                    {t('implementation.faqs.browsers.answer')}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="data">
                  <AccordionTrigger className="text-primary-dark hover:text-primary">
                    {t('implementation.faqs.data.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-dark">
                    {t('implementation.faqs.data.answer')}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="algorithm">
                  <AccordionTrigger className="text-primary-dark hover:text-primary">
                    {t('implementation.faqs.algorithm.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-dark">
                    {t('implementation.faqs.algorithm.answer')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <p className="text-lg text-neutral-dark mb-4">
                  {t('implementation.guidePrompt')}
                </p>
                <a 
                  href={getGuideLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  {t('implementation.guide')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Implementation;