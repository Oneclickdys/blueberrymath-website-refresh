import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    content: "Blueberry Math has transformed my daughter's relationship with mathematics. The personalized approach and instant feedback have boosted her confidence tremendously.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "High School Student",
    content: "The step-by-step explanations are incredibly helpful. I've improved my math grades significantly since using Blueberry Math.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Math Teacher",
    content: "As an educator, I'm impressed by how well Blueberry Math adapts to each student's needs. It's like having a personal tutor for every student.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            What Our Users Say
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            Join thousands of satisfied students and parents
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-neutral-dark mb-6 italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-primary-dark">{testimonial.name}</p>
                <p className="text-sm text-neutral">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};