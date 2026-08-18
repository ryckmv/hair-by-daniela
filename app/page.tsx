import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridal from "@/components/Bridal";
import CallToAction from "@/components/CallToAction";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <Contact />
      <Footer />
    </main>
  );
}
