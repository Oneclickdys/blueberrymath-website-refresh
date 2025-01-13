import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    content: "My daughter's confidence in math has improved significantly since using Blueberry Math.",
  },
  {
    name: "Michael Chen",
    role: "Student",
    content: "The step-by-step explanations really help me understand where I went wrong.",
  },
  {
    name: "Lisa Rodriguez",
    role: "Math Teacher",
    content: "An excellent tool that helps me provide personalized attention to each student.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};