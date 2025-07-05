import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(1, "Assunto obrigatório"),
  message: z.string().min(10, "Mensagem muito curta"),
});
