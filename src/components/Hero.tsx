import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Math with AI-Powered Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light">
            Experience personalized math practice that adapts to your learning style, with instant feedback and step-by-step explanations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};