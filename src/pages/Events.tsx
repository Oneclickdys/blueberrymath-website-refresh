import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events - Blueberry Math</title>
        <meta name="description" content="Stay updated with Blueberry Math events and workshops." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark">Events</h1>
            <p className="mt-4 text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;