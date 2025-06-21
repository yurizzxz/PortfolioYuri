"use client";

import { FeedbackCard, FeedbackCardProps } from "@/components/feedback-card";
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

  if (loading) return <p>Carregando feedbacks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="container mx-auto max-w-6xl px-4 pt-10 xl:px-0" id="feedbacks">
      <div className="flex flex-col px-4 md:px-0 pb-24 pt-20">
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex md:items-center flex-col"
        >
          <h1 className="text-4xl font-bold">Vozes sobre meu trabalho</h1>
          <p className="mt-2"> Algumas pessoas que já trabalharam comigo.</p>
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
    </main>
  );
}
