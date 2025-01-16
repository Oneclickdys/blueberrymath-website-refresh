import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Users, PlayCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      title: t('implementation.steps.signup'),
      description: t('implementation.steps.signupDesc')
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t('implementation.steps.createClass'),
      description: t('implementation.steps.createClassDesc')
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-primary" />,
      title: t('implementation.steps.start'),
      description: t('implementation.steps.startDesc')
    }
  ];

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
            <p className="text-lg text-gray-600 mb-12">
              {t('implementation.subtitle')}
            </p>
          </section>

          {/* Steps Section */}
          <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-colors relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Guides and FAQ Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              {t('implementation.guidesAndFaq')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guide */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('implementation.guide')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a 
                      href={getGuideLink()}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                    >
                      {t('implementation.guide')}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="devices">
                      <AccordionTrigger>{t('implementation.faqs.devices.question')}</AccordionTrigger>
                      <AccordionContent>
                        {t('implementation.faqs.devices.answer')}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="browsers">
                      <AccordionTrigger>{t('implementation.faqs.browsers.question')}</AccordionTrigger>
                      <AccordionContent>
                        {t('implementation.faqs.browsers.answer')}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="data">
                      <AccordionTrigger>{t('implementation.faqs.data.question')}</AccordionTrigger>
                      <AccordionContent>
                        {t('implementation.faqs.data.answer')}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="algorithm">
                      <AccordionTrigger>{t('implementation.faqs.algorithm.question')}</AccordionTrigger>
                      <AccordionContent>
                        {t('implementation.faqs.algorithm.answer')}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Implementation;