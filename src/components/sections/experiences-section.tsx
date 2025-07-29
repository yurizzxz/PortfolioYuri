import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { works, study } from "@/constants/experiences";

export default function Experiences() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-16 md:py-28 xl:px-0" id="carrer">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Minha Trajetória</h1>
        {/* <p className="mt-3">
          Ao longo da minha carreira, desenvolvi habilidades técnicas por meio
          de experiências profissionais e formações.
        </p> */}
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h1 className="text-xl text-left font-bold">
            Experiências Profissionais
          </h1>
          <div className="relative border-l border-zinc-800 pl-10">
            {works.map((work) => (
              <Card
                key={work.id}
                className="mb-6 relative p-4 transition-all cursor-default"
              >
                <span className="absolute -left-[46px] top-6 w-3 h-3 bg-zinc-800 rounded-full" />
                <span className="absolute -left-[35px] top-7 w-9 h-0.5 bg-zinc-800 rounded-full" />

                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">
                    {work.title}
                  </CardTitle>

                  {(work.costummer || work.type) && (
                    <p className="text-sm mt-1">
                      {work.costummer}
                      {work.costummer && work.type && " - "}
                      {work.type}
                    </p>
                  )}

                  {work.duration && (
                    <p className="text-sm text-purple-600">{work.duration}</p>
                  )}
                </CardHeader>

                {work.description && (
                  <CardContent className="pt-1">
                    <p className="text-sm text-zinc-300">{work.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-xl text-left font-bold">Acadêmico</h1>

          <div className="relative border-l border-zinc-800 pl-10">
            {study.map((study) => (
              <Card
                key={study.id}
                className="mb-6 relative p-4 transition-all cursor-default"
              >
                <span className="absolute -left-[46px] top-6 w-3 h-3 bg-zinc-800 rounded-full" />
                <span className="absolute -left-[35px] top-7 w-9 h-0.5 bg-zinc-800 rounded-full" />

                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">
                    {study.title}
                  </CardTitle>

                  {(study.company) && (
                    <p className="text-sm mt-1">
                      {study.company}
                    </p>
                  )}

                  {study.duration && (
                    <p className="text-sm text-purple-600">{study.duration}</p>
                  )}
                  
                </CardHeader>

                {study.description && (
                  <CardContent className="pt-1">
                    <p className="text-sm text-zinc-300">{study.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
