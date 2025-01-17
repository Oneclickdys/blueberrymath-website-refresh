import { Card } from "@/components/ui/card";
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

  // Get testimonials and ensure it's an array with a fallback to empty array
  const testimonials = (t('testimonials.list', { returnObjects: true }) || []) as Array<{
    name: string;
    role: string;
    city: string;
    content: string;
  }>;

  // If no testimonials, don't render the section
  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

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
                  <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10">
                    <p className="text-neutral-dark mb-6 flex-grow italic">"{testimonial.content}"</p>
                    <div className="mt-auto space-y-1">
                      <p className="font-semibold text-primary-dark">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-sm text-[#7E69AB]">{testimonial.role}</p>
                      )}
                      {testimonial.city && (
                        <p className="text-sm text-[#7E69AB]">{testimonial.city}</p>
                      )}
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