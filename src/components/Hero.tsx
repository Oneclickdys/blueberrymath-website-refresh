import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Math Learning for Every Student
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Personalized math practice with instant feedback and step-by-step explanations
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
          >
            Try For Free
          </Button>
        </div>
      </div>
    </div>
  );
};