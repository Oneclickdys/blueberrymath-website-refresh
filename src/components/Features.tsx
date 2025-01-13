import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Personalized Learning",
    description: "AI-powered system adapts to each student's unique learning pace and style",
  },
  {
    title: "Instant Feedback",
    description: "Get immediate explanations and corrections for every problem",
  },
  {
    title: "Step-by-Step Solutions",
    description: "Detailed walkthrough of problem-solving methods for better understanding",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Why Choose Blueberry Math?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CheckCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};