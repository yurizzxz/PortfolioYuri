"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/contactSchema";

type ContactFormData = z.infer<typeof contactSchema>;

export default function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const documentId = `${data.subject}-${data.name}-${data.email}`.replace(
      /\s+/g,
      "_"
    );

    await setDoc(doc(db, "messages", documentId), {
      ...data,
      createdAt: Timestamp.now(),
    });

    reset();
  };

  return { register, handleSubmit, onSubmit, reset, errors, isSubmitting };
}
