import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Users, PlayCircle, BookOpen, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Implementation = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      title: "Sign Up",
      description: "Create your account in just minutes and get started right away."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Create Your Class and Grant Access",
      description: "Organize your students into classes and provide them access to the platform."
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-primary" />,
      title: "Start Using It!",
      description: "Once your class is set up, your students can begin practicing immediately with activities tailored to their pace and level."
    }
  ];

  return (
    <>
      <Helmet>
        <title>School Implementation - Blueberry Math</title>
        <meta 
          name="description" 
          content="Learn how to implement Blueberry Math in your school effectively." 
        />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary-dark mb-6">
              How to Start Using Blueberry Math at Your School
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Getting started with Blueberry Math is easy! Follow these simple steps to unlock the full potential of our platform:
            </p>
          </section>

          {/* Steps Section */}
          <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Guides and FAQ Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              Guides and FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guides */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <CardTitle>Guides</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <button className="w-full text-left hover:text-primary transition-colors">
                    Teacher Guide
                  </button>
                  <button className="w-full text-left hover:text-primary transition-colors">
                    Student Guides
                  </button>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <CardTitle>FAQs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <button className="w-full text-left hover:text-primary transition-colors">
                    View Frequently Asked Questions
                  </button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Implementation;