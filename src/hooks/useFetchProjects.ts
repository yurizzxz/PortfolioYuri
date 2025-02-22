import { useState, useEffect } from "react";
import { db } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Project {
  id: string;
  titulo: string;
  descricao: string;
  imagemUrl?: string;
  stack: string;
  linguagem1?: string;
  linguagem2?: string;
  linguagem3?: string;
  linguagem4?: string;
  link: string;
}

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
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
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

  return { projects, loading };
};
