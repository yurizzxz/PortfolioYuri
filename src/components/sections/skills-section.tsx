import StacksIcons from "@/components/ui/stacks-icons";

export default function Skills() {
  return (
    <main className="bg-common">
      <section className="flex flex-col  px-4 md:px-0 items-center py-14 md:py-24">
      <div className="mb-5 flex md:items-center flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Minhas Skills</h1>
        <p className="text-sm md:text-md">Algumas das principais tecnologias e ferramentas que utilizo no meu trabalho como desenvolvedor.</p>
      </div>
      <StacksIcons />
    </section>
    </main>
  );
}
