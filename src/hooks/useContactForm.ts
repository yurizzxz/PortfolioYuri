'use client'

import { useState } from "react";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    createdAt: Timestamp.now(),
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const documentId = `${formData.subject}-${formData.name}-${formData.email}`.replace(/\s+/g, '_');

    await setDoc(doc(db, "messages", documentId), {
      ...formData,
      createdAt: Timestamp.now(),
    });

    setFormData({ name: "", email: "", message: "", createdAt: Timestamp.now(), subject: "" });
  };

  return { formData, handleChange, handleSubmit };
}
