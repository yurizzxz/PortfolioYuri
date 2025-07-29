"use client";

import { FeedbackCard, FeedbackCardProps } from "@/components/ui/feedback-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useFeedbacks } from "@/hooks/useFeedbacks";

export default function Feedbacks() {
  const { feedbacks, loading, error } = useFeedbacks();

  return (
    <main
      className="bg-common"
    >
      <div
        className="container mx-auto max-w-6xl px-4 pt-10 xl:px-0"
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
            <h1 className="text-3xl md:text-4xl font-bold">Vozes sobre meu trabalho</h1>
            <p className="text-sm md:text-md mt-2">Veja o que algumas pessoas que já trabalharam comigo dizem.</p>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center relative overflow-hidden max-w-full gap-10"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {feedbacks.map((feedback) => (
                    <CarouselItem
                      key={feedback.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <FeedbackCard {...(feedback as FeedbackCardProps)} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
