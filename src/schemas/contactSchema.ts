import * as z from 'zod';

export const Email = z.object({
    name: z.string(),
    email: z.email("Email Inválido"),
    message: z.string().min(5, "Mensagem muito curta"),
});

