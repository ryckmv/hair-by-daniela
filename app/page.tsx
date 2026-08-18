import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridal from "@/components/Bridal";
import CallToAction from "@/components/CallToAction";
import Works from "@/components/Works";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Bridal />
      <CallToAction />
      <Works />
      <About />
      <Booking />
       <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}