import { Brain, Target, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Learning",
    description: "Our advanced AI adapts to your unique learning style and pace, ensuring optimal progress",
    icon: Brain,
  },
  {
    title: "Personalized Practice",
    description: "Get custom-tailored math problems that match your skill level and learning goals",
    icon: Target,
  },
  {
    title: "Instant Feedback",
    description: "Receive immediate explanations and step-by-step solutions for every problem",
    icon: Clock,
  },
  {
    title: "Proven Results",
    description: "Students using Blueberry Math show significant improvement in test scores",
    icon: Award,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            Why Choose Blueberry Math?
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            Experience the future of math education with our innovative platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-neutral">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};