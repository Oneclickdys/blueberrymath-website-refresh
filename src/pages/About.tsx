import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Blueberry Math</title>
        <meta name="description" content="Learn about Blueberry Math's mission and team." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-dark">About Us</h1>
            <p className="mt-4 text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;