import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Content from "./_components/content";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Content></Content>
    </>
  );
}
