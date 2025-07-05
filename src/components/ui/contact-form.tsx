"use client";

import React from "react";
import { motion } from "framer-motion";
import useContactForm from "@/hooks/useContactForm";
import {
  InputField,
  InputRoot,
  InputIcon,
  TextField,
} from "@/components/ui/input";
import { User, Mail, MessageSquare, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  isVisible: boolean;
}

export default function ContactForm({ isVisible }: ContactFormProps) {
  const { register, handleSubmit, onSubmit, reset, errors, isSubmitting } =
    useContactForm();

  const { toast } = useToast();

  const handleFormSubmit = async (data: any) => {
    try {
      await onSubmit(data);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve você receberá uma resposta.",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar a mensagem.",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <div className="grid gap-2 md:grid-cols-2">
          <div>
            <InputRoot>
              <InputIcon>
                <User aria-hidden="true" />
              </InputIcon>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <InputField
                type="text"
                id="name"
                placeholder="Seu nome"
                {...register("name")}
                autoComplete="off"
                aria-required="true"
              />
            </InputRoot>
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <InputRoot>
              <InputIcon>
                <Mail aria-hidden="true" />
              </InputIcon>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <InputField
                type="email"
                id="email"
                placeholder="Seu email"
                {...register("email")}
                aria-required="true"
              />
            </InputRoot>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <InputRoot>
          <InputIcon>
            <Edit3 aria-hidden="true" />
          </InputIcon>
          <label htmlFor="subject" className="sr-only">
            Assunto
          </label>
          <InputField
            type="text"
            id="subject"
            placeholder="Assunto"
            {...register("subject")}
            autoComplete="off"
            aria-required="true"
          />
        </InputRoot>
        {errors.subject && (
          <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>
        )}
        </div>

        <div>
          <InputRoot className="w-full text-sm pt-8 px-4 rounded-lg bg-input border border-[var(--border)] focus-within:border-zinc-600 data-[error=true]:border-red-500 flex items-start gap-3">
          <InputIcon>
            <MessageSquare aria-hidden="true" />
          </InputIcon>
          <label htmlFor="message" className="sr-only">
            Mensagem
          </label>
          <TextField
            id="message"
            placeholder="Mensagem"
            {...register("message")}
            aria-required="true"
          />
        </InputRoot>
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
        )}
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <Button
            aria-label="Enviar Mensagem"
            type="submit"
            className="text-foreground h-10 md:col-span-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
          <Button
            aria-label="Limpar Campos"
            type="button"
            onClick={() => reset()}
            variant="secondary"
            className="text-foreground h-10"
          >
            Limpar Campos
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
