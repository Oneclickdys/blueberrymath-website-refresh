import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Container } from "@/components/ui/container";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events - Blueberry Math</title>
        <meta name="description" content="Stay updated with Blueberry Math events and workshops." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <Container>
            <h1 className="text-4xl font-bold text-primary-dark mb-12">Current Events</h1>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/4e96004e-f976-47f2-a36a-bf16063bcc18.png" 
                  alt="Special promotion: Save math mission" 
                  className="w-full h-auto"
                />
                <div className="p-6 bg-white space-y-4">
                  <h2 className="text-2xl font-bold text-primary">You have a new mission: save math!</h2>
                  <div className="space-y-4 text-lg text-neutral-dark">
                    <p>
                      Sign up before February 10th and enjoy 2 weeks free.
                    </p>
                    <p>
                      Confirm your course purchase 25-26 and use it this year at no cost.
                    </p>
                    <div className="pt-4">
                      <a 
                        href="#" 
                        className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        Start now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Events;