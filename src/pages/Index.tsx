import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>Blueberry Math - AI-Powered Math Learning Platform</title>
        <meta name="description" content="Master mathematics with Blueberry Math's AI-powered learning platform. Get personalized practice, instant feedback, and step-by-step explanations." />
        <meta name="keywords" content="math learning, AI tutor, mathematics education, personalized learning, math practice" />
        <meta property="og:title" content="Blueberry Math - AI-Powered Math Learning Platform" />
        <meta property="og:description" content="Master mathematics with Blueberry Math's AI-powered learning platform. Get personalized practice, instant feedback, and step-by-step explanations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blueberrymath.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blueberry Math - AI-Powered Math Learning Platform" />
        <meta name="twitter:description" content="Master mathematics with Blueberry Math's AI-powered learning platform. Get personalized practice, instant feedback, and step-by-step explanations." />
        <link rel="canonical" href="https://www.blueberrymath.ai" />
      </Helmet>
      <Header />
      <main className="pt-16 min-h-screen">
        <Hero />
        <Features />
        <CTASection />
      </main>
    </>
  );
};

export default Index;