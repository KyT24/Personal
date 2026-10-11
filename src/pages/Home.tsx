import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";
import Experience from "../sections/Experience";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}