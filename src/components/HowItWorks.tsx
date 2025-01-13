import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account in seconds",
  },
  {
    number: "2",
    title: "Take Assessment",
    description: "Complete a quick diagnostic test",
  },
  {
    number: "3",
    title: "Start Learning",
    description: "Get personalized practice problems",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex-1 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-accent absolute -right-4 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};