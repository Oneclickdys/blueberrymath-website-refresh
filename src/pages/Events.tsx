import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const currentEvents = [
    {
      id: 1,
      title: "You have a new mission: save math!",
      dates: "Until February 10th, 2024",
      description: "Sign up before February 10th and enjoy 2 weeks free. Confirm your course purchase 25-26 and use it this year at no cost.",
      image: "/lovable-uploads/4e96004e-f976-47f2-a36a-bf16063bcc18.png",
      cta: "Start now!"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Winter Math Festival",
      dates: "December 1-15, 2023",
      description: "A festive celebration of mathematics with special holiday-themed challenges and rewards.",
      image: "/placeholder.svg",
      cta: "View Results"
    },
    {
      id: 5,
      title: "Back to School Special",
      dates: "September 1-30, 2023",
      description: "Special promotional rates and exclusive content for the new school year.",
      image: "/placeholder.svg",
      cta: "View Details"
    },
    {
      id: 6,
      title: "Summer Math Camp",
      dates: "July 1-31, 2023",
      description: "Virtual summer camp featuring daily math activities and interactive sessions.",
      image: "/placeholder.svg",
      cta: "View Highlights"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Events - Blueberry Math</title>
        <meta name="description" content="Stay updated with Blueberry Math events and workshops." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <Container>
            <h1 className="text-4xl font-bold text-primary-dark mb-12">Current Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.map((event) => (
                <div key={event.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
                    <p className="text-sm font-medium text-gray-600">{event.dates}</p>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="pt-4">
                      <a 
                        href="#" 
                        className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        {event.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-primary-dark mt-20 mb-12">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <div className="relative">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover opacity-75"
                    />
                    <Badge 
                      className="absolute top-4 right-4 bg-gray-500"
                      variant="secondary"
                    >
                      Finished
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
                    <p className="text-sm font-medium text-gray-600">{event.dates}</p>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="pt-4">
                      <a 
                        href="#" 
                        className="inline-block bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
                      >
                        {event.cta}
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