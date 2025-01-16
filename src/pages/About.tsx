import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { About as AboutSection } from "@/components/About";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Blueberry Math</title>
        <meta name="description" content="Learn about Blueberry Math's mission and team." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <AboutSection />
      </main>
    </>
  );
};

export default About;