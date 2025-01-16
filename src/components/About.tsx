import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/container';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            What is Blueberry Math?
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark">
            <p>Blueberry Math is an innovative educational platform that transforms how students learn mathematics through an engaging space adventure theme.</p>
            <p>Our platform combines cutting-edge technology with proven educational methods to create a unique learning experience that makes mathematics both fun and effective for students.</p>
            <p>Through interactive challenges, personalized learning paths, and real-time feedback, students develop strong mathematical foundations while enjoying their educational journey.</p>
            <p>We believe that every student has the potential to excel in mathematics, and our platform provides the tools and support needed to unlock that potential.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};