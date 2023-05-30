import { z } from "zod";

const userSchema = z.object({
    id: z.string(),
    name: z.string().max(100),
    email: z.string().email().max(120),
    password: z.string().min(4).max(20),
    phoneNumber: z.string().max(20),
    createdAt: z.date().or(z.string()),
});

const userSchemaRequest = userSchema.omit({
    id: true,
    createdAt: true,
});

const userSchemaResponse = userSchema.omit({
    password: true,
});

const userSchemaUpdate = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
