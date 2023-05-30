import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email().max(120),
    password: z.string().min(4).max(20),
});

export { loginSchema };
