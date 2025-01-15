import { HowItWorks as HowItWorksComponent } from "@/components/HowItWorks";
import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - Blueberry Math</title>
        <meta name="description" content="Learn how Blueberry Math transforms mathematics education through adaptive learning and gamification." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HowItWorksComponent />
      </main>
    </>
  );
};

export default HowItWorks;