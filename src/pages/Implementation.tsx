import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';

const Implementation = () => {
  return (
    <>
      <Helmet>
        <title>School Implementation - Blueberry Math</title>
        <meta name="description" content="Learn how to implement Blueberry Math in your school effectively." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark">School Implementation</h1>
            <p className="mt-4 text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Implementation;