import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Content from "./_components/content";
import Projects from "./_components/projects";
import Form from "./_components/form"

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Content></Content>
      <Projects></Projects>
      <Form></Form>
    </>
  );
}
