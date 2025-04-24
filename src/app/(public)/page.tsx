import AboutSection from "./about/page";
import Contact from "./contact/page";
import Hero from "./home/page";
import Projects from "./projects/page";
import ServicesSection from "./works/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Projects />
      <Contact />
    </div>
  );
}
