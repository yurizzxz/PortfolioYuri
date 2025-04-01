'use client'

import { useState } from "react";

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://backendportfolioyuri.onrender.com/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      alert("Erro ao enviar o e-mail.");
      console.error(error);
    }
  };

  return { formData, handleChange, handleSubmit };
}
