import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary-dark text-center">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <p>{t('about.description4')}</p>
            <div className="mt-12 space-y-6">
              <p>
                We're passionate about technology and education, and we know technology can revolutionize the learning process.
              </p>
              <p>
                We've learned so much from publishers, and we continue learning daily by engaging with teachers, students, and schools to understand their needs, frustrations, and aspirations for better learning experiences.
              </p>
              <p>
                That's how Blueberry Math was born—a combination of our passions for education and technology, aimed at empowering the teaching and learning experience in one of the most critical subjects. And hopefully, helping you, the teachers, to guide students in becoming the individuals they aspire to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};