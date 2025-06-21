import StacksIcons from "@/components/stacks-icons";

export default function Skills() {
  return (
    <section className="flex flex-col px-4 md:px-0 items-center py-28">
      <div className="mb-5 flex md:items-center flex-col">
        <h1 className="text-4xl font-bold mb-2">Minhas Skills</h1>
        <p>Algumas das principais tecnologias e ferramentas que utilizo no meu trabalho como desenvolvedor.</p>
      </div>
      <StacksIcons />
    </section>
  );
}
