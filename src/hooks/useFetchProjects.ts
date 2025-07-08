import { useState, useEffect, useMemo } from "react";
import { db } from "@/lib/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Project } from "@/types/project";

export const useFetchProjects = (category = "Todos") => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async (category: string) => {
    try {
      let q;
      if (category !== "Todos") {
        q = query(collection(db, "colecao"), where("stack", "==", category));
      } else {
        q = collection(db, "colecao");
      }

      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          titulo: data.titulo,
          descricao: data.descricao,
          imagemUrl: data.imagemUrl,
          stack: data.stack,
          linguagens: data.linguagens,
          link: data.link,
        };
      }) as Project[];

      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(category);
  }, [category]);

  const memorizedProjects = useMemo(() => projects, [projects]);

  return { projects: memorizedProjects, loading };
};
