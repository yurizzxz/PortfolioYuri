'use client';

import React from "react";
import { motion } from "framer-motion";
import useContactForm from "@/hooks/useContactForm";
import { InputField, InputRoot, InputIcon, TextField } from "@/components/input";
import { User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"; 

interface ContactFormProps {
  isVisible: boolean;
}

function FormGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export default function ContactForm({ isVisible }: ContactFormProps) {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent) => {
    try {
      await handleSubmit(event);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve entraremos em contato.",
      });
      setTimeout(() => {
        
      }, 3000)
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
      className="form-container"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <form className="contact-form flex flex-col gap-4" onSubmit={onSubmit}>
        <FormGroup>
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputRoot>
        </FormGroup>

        <FormGroup>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputRoot>
        </FormGroup>

        <FormGroup>
          <InputRoot className="w-full pt-8 px-4 rounded-lg text-base bg-[var(--cardColor)] border border-[var(--border)] focus-within:border-gray-400 data-[error=true]:border-red-500 flex items-start gap-3">
            <InputIcon>
              <MessageSquare />
            </InputIcon>
            <TextField
              id="message"
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputRoot>
        </FormGroup>

        <Button type="submit" className="text-foreground h-12">
          Enviar
        </Button>
      </form>
    </motion.div>
  );
}
