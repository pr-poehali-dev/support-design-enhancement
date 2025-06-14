import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingHours from "@/components/WorkingHours";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="working-hours">
        <WorkingHours />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
