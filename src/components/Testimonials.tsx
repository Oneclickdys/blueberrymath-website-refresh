import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: t('testimonials.roles.parent'),
      content: t('testimonials.sarah'),
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: t('testimonials.roles.student'),
      content: t('testimonials.michael'),
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: t('testimonials.roles.teacher'),
      content: t('testimonials.lisa'),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-primary/10">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};