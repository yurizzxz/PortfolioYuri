import { Separator } from "@/components/ui/separator";
import AboutSection from "./about/page";
import Contact from "./contact/page";
import Hero from "./home/page";
import Projects from "@/components/pages/page";
import ServicesSection from "./works/page";
import Skills from "./skills/page";
import Feedbacks from "./feedbacks/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <Hero />
      <Separator />
      <AboutSection />
      <Separator />
      <Skills />
      <Separator />
      <ServicesSection />
      <Separator />
      <Projects maxProjects={3} showLoadMore />
      <Separator />
      <Feedbacks />
      <Separator />
      <Contact />
    </div>
  );
}
