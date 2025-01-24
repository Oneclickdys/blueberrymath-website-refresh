import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Events = () => {
  const { t } = useTranslation();
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  
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

  const getImagePath = (imageName: string) => {
    return imageName.startsWith('http') ? imageName : imageName;
  };

  const toggleDetails = (eventId: number) => {
    setSelectedEventId(selectedEventId === eventId ? null : eventId);
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
                  <div key={event.id} className="relative group">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
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
                          <button 
                            onClick={() => toggleDetails(event.id)}
                            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                          >
                            {t('events.viewDetails')}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Details Panel */}
                    <div 
                      className={`absolute top-0 left-full w-[800px] bg-white shadow-xl h-full transform transition-all duration-300 ease-in-out ${
                        selectedEventId === event.id ? 'translate-x-4 opacity-100' : '-translate-x-4 opacity-0 pointer-events-none'
                      } rounded-lg`}
                    >
                      <div className="p-8 h-full">
                        <button 
                          onClick={() => toggleDetails(event.id)}
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold text-primary">{t('events.details.title')}</h2>
                          <div className="prose prose-lg">
                            <p>{t('events.details.description')}</p>
                            
                            <h3 className="text-xl font-semibold mt-6 mb-4">{t('events.details.offer.title')}</h3>
                            <ul className="space-y-4">
                              {(t('events.details.offer.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-4">{t('events.details.howToTry.title')}</h3>
                            <p>{t('events.details.howToTry.description')}</p>
                            
                            <p className="mt-6">{t('events.details.howToTry.cta')}</p>
                            
                            <p className="mt-6">{t('events.details.howToTry.support')}</p>
                          </div>
                        </div>
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
                        href="https://school.blueberrymath.ai/concurso" 
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