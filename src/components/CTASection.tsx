import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">
          Ready to Transform Your Math Learning?
        </h2>
        <p className="text-xl mb-8 text-gray-200 animate-fade-up" style={{ animationDelay: "200ms" }}>
          Join thousands of students already improving their math skills with Blueberry Math
        </p>
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};