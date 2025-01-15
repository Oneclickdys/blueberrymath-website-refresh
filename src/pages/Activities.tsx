import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';

const Activities = () => {
  return (
    <>
      <Helmet>
        <title>Activities - Blueberry Math</title>
        <meta name="description" content="Explore our interactive math activities designed for engaging learning." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark">Our Activities</h1>
            <p className="mt-4 text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Activities;