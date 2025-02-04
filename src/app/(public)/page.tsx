import Navbar from "../_components/navbar";
import Hero from "../_components/hero";
import Content from "../_components/content";
import Projects from "../_components/projects";
import Form from "../_components/form"
import { redirect } from "next/dist/server/api-utils";


export default function App() {
  return (
    <>
      <Hero></Hero>
      <Content></Content>
      <Projects></Projects>
      <Form></Form>
    </>
  );
}
