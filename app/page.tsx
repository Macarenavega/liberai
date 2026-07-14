import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import OtherProjects from "@/components/OtherProjects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Showcase />
        <Pricing />
        <OtherProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
