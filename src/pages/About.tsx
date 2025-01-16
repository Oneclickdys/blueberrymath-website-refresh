import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Blueberry Math</title>
        <meta name="description" content="Learn about Blueberry Math's mission and team." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                Who is behind Blueberry Math?
              </h2>
              <div className="space-y-6 text-lg text-neutral-dark">
                <p>
                  Blueberry Math is a product powered by{" "}
                  <a 
                    href="https://oneclick.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Oneclick
                  </a>
                </p>
                <p>
                  Oneclick is a team of digital technologists, product experts, and education enthusiasts united by a common goal: to make the world a better place through education by helping millions of students become fulfilled adults.
                </p>
                <p>
                  Innovation has been the foundation of our ethos since our inception. We continuously research and experiment with new ways to transform great content into successful learning experiences, integrating neuroscientific evidence with advanced computational technologies.
                </p>
                <p>
                  With recognized expertise in the K–12 publishing sector, we design and build versatile solutions to meet the needs of students, teachers, and schools. Over the past 15+ years, we've supported educational publishers in their digital transformations, but we believe education still has much room for innovation, and we're committed to doing more.
                </p>
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
          </Container>
        </section>
      </main>
    </>
  );
};

export default About;