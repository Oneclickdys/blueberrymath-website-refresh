import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/container';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark">
            <p>Blueberry Math is a gamified mathematics platform that offers adaptive and personalized learning for students in grades 1-6.</p>
            <p>Backed by best practices in neuroeducation, Blueberry Math combines gamification with technology to ensure each student absorbs and retains concepts effectively.</p>
            <p>It provides students with the content they truly need to practice, always aligned with curriculum standards, while promoting solid and lasting study habits to build a robust mathematical foundation for continued success.</p>
            <p>Whether in the classroom or at home, Blueberry Math seamlessly adapts to any learning environment, providing teachers with tools to monitor their students' progress and intervene at the right time with the right insights.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};