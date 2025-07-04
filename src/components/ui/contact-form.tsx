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
  const { formData, handleChange, handleSubmit } = useContactForm();
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent) => {
    try {
      await handleSubmit(event);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve você receberá uma resposta.",
      });
      setTimeout(() => {}, 3000);
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
        onSubmit={onSubmit}
        noValidate
      >
        <div className="grid gap-2 md:grid-cols-2">
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
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
              aria-required="true"
            />
          </InputRoot>

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
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </InputRoot>
        </div>

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
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            required
            autoComplete="off"
            aria-required="true"
          />
        </InputRoot>

        <InputRoot className="w-full text-sm pt-8 px-4 rounded-lg bg-input border border-[var(--border)] focus-within:border-zinc-600 data-[error=true]:border-red-500 flex items-start gap-3">
          <InputIcon>
            <MessageSquare aria-hidden="true" />
          </InputIcon>
          <label htmlFor="message" className="sr-only">
            Mensagem
          </label>
          <TextField
            id="message"
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </InputRoot>

        <Button
          aria-label="Enviar Mensagem"
          type="submit"
          className="text-foreground h-12"
        >
          Enviar
        </Button>
      </form>
    </motion.div>
  );
}
