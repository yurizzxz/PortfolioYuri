import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/app/firebaseconfig";

export interface Feedback {
  id: string;
  name: string;
  role: string;
  stars?: number;
  feedback: string;
  href?: string;
}

export function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setLoading(true);
        const q = query(collection(db, "avaliacoes"), orderBy("stars")); 
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => {
          const raw = doc.data();
          return {
            id: doc.id,
            name: raw.nome,
            role: raw.role,
            stars: raw.stars,
            feedback: raw.description,
            href: raw.urlFoto || undefined,
          };
        });
        setFeedbacks(data);
      } catch (err) {
        setError("Erro ao buscar feedbacks");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  return { feedbacks, loading, error };
}
