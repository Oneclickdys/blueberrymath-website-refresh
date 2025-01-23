import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Events = () => {
  const { t } = useTranslation();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
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

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
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
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDetails();
                          }}
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

            {/* Details Panel */}
            <div className={`fixed top-0 right-0 h-full w-[600px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isDetailsOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
              <div className="p-8">
                <button 
                  onClick={toggleDetails}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">Detalles del Evento</h2>
                  <div className="prose prose-lg">
                    <p>Imagina que las matemáticas en tu colegio son más efectivas, divertidas y fáciles de enseñar. Con BlueberryMath, transformamos el aprendizaje en una experiencia interactiva y gamificada. 🎮✨</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-4">¿Qué ofrecemos?</h3>
                    <ul className="space-y-4">
                      <li>✅ Una plataforma fácil de usar, con informes descargables para monitorear el progreso de cada estudiante.</li>
                      <li>✅ Contenidos personalizados que se adaptan a su nivel y al temario de tu centro.</li>
                      <li>✅ Neuroeducación aplicada: 🧠¡la curva del olvido ya no será un problema!</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-4">💡 ¿Cómo puedes probarlo?</h3>
                    <p>🎯 Inscríbete antes del 10 de febrero y disfruta de 2 semanas gratis.</p>
                    
                    <p className="mt-6">➡️ Solicita ahora tu prueba gratuita aquí</p>
                    
                    <p className="mt-6">💪 ¡Estamos listos para ayudarte!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay */}
            {isDetailsOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={toggleDetails}
              />
            )}

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