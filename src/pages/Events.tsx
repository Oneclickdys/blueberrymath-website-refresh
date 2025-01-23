import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  
  const currentEvents = t('events.list.current', { returnObjects: true }) as Array<{
    id: number;
    title: string;
    dates: string;
    description: string;
    image: string;
  }>;

  const pastEvents = t('events.list.past', { returnObjects: true }) as Array<{
    id: number;
    title: string;
    dates: string;
    description: string;
    image: string;
  }>;

  // Helper function to get the correct image path
  const getImagePath = (imageName: string) => {
    return imageName.startsWith('http') ? imageName : imageName;
  };

  return (
    <>
      <Helmet>
        <title>{t('events.meta.title')}</title>
        <meta 
          name="description" 
          content={t('events.meta.description')}
        />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <Container>
            <h1 className="text-4xl font-bold text-primary-dark mb-12">{t('events.currentEvents')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.length > 0 ? (
                currentEvents.map((event) => (
                  <div key={event.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                    <img 
                      src={getImagePath(event.image)}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
                      <p className="text-sm font-medium text-gray-600">{event.dates}</p>
                      <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
                      <div className="pt-4">
                        <a 
                          href="#" 
                          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                        >
                          {t('events.viewDetails')}
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">{t('events.noEvents')}</p>
              )}
            </div>

            <h2 className="text-4xl font-bold text-primary-dark mt-20 mb-12">{t('events.pastEvents')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <div className="relative">
                    <img 
                      src={getImagePath(event.image)}
                      alt={event.title}
                      className="w-full h-48 object-cover opacity-75"
                    />
                    <Badge 
                      className="absolute top-4 right-4 bg-gray-500"
                      variant="secondary"
                    >
                      {t('events.finished')}
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
                    <p className="text-sm font-medium text-gray-600">{event.dates}</p>
                    <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
                    <div className="pt-4">
                      <a 
                        href="#" 
                        className="inline-block bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
                      >
                        {t('events.viewResults')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Events;