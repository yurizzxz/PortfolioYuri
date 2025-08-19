"use client";

import { FeedbackCard, FeedbackCardProps } from "@/components/common/feedback-card";

import { motion } from "framer-motion";
import { useFeedbacks } from "@/hooks/useFeedbacks";
import { Marquee } from "../ui/marquee";

export default function Feedbacks() {
  const { feedbacks, loading, error } = useFeedbacks();

  return (
    <main className="bg-common">
      <div
        className="pt-10 xl:px-0"
        id="feedbacks"
      >
        {loading && <p>Carregando feedbacks...</p>}
        {error && <p>Erro: {error}</p>}
        <div className="flex flex-col py-0 md:pb-24 md:pt-20">
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex md:items-center flex-col"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              Vozes sobre meu trabalho
            </h1>
            <p className="text-sm md:text-md mt-2">
              Veja o que algumas pessoas que já trabalharam comigo dizem.
            </p>
          </motion.div>
          <div>
            <Marquee pauseOnHover className="[--duration:10s]">
              {feedbacks.map((feedback) => (
                <FeedbackCard
                  key={feedback.id}
                  {...(feedback as FeedbackCardProps)}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
}
