import { Separator } from "@/components/ui/separator";
import Contact from "@/components/sections/contact-section";
import Hero from "@/components/sections/home-section";
import Projects from "@/components/sections/project-section";
import ServicesSection from "@/components/sections/works-section";
import Skills from "@/components/sections/skills-section";
import Feedbacks from "@/components/sections/feedbacks-section";
import Experiences from "@/components/sections/experiences-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <Hero />
      <Separator />
      <ServicesSection />
      <Separator />
      <Skills />
      <Separator />
      <Experiences />
      <Separator />
      <Projects maxProjects={3} showLoadMore />
      <Separator />
      <Feedbacks />
      <Separator />
      <Contact />
    </div>
  );
}
