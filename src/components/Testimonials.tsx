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
      name: "Fernando Martí",
      role: "Real Colegio Escuelas Pías, Gandía",
      content: "Since my students have been working with Blueberry they are much more motivated and excited about Math. It is a very interesting gamified experience to complement our classes.",
      rating: 5,
    },
    {
      name: "Lourdes",
      role: "CEIP Luís Vives de Puçol, Valencia",
      content: "My class loves learning math with the Blueberry mascots and it helps me learn more about my students' achievements. It's a great tool for personalization of learning.",
      rating: 5,
    },
    {
      name: "Marta",
      role: "CEIP Padre Poveda, Madrid",
      content: "From the first moment I presented the Blueberry Math proposal to them, the motivation of my students in relation to the area of mathematics increased. Through gamification they reinforced the content they were working on in the classroom, obtaining very good results.",
      rating: 5,
    },
    {
      name: "Esther",
      role: "Madrid",
      content: "Thanks to Blueberry Math, I've been able to motivate the students who were lagging behind in maths.",
      rating: 5,
    },
    {
      name: "Encarna",
      role: "Granada",
      content: "My students love it, they ask me in class when we are going to play with Blueberry.",
      rating: 5,
    },
    {
      name: "Manuel",
      role: "Madrid",
      content: "We have been using the platform a lot a my students love it!",
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