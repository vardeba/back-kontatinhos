import { z } from "zod";

const kontactSchema = z.object({
    id: z.string(),
    name: z.string().max(100),
    email: z.string().email().max(120),
    phoneNumber: z.string().max(20),
    createdAt: z.date().or(z.string()),
});

const kontactSchemaRequest = kontactSchema.omit({
    id: true,
    createdAt: true,
});

const kontactSchemaResponse = kontactSchema.array();

const kontactSchemaUpdate = kontactSchemaRequest.partial();

export {
    kontactSchema,
    kontactSchemaRequest,
    kontactSchemaResponse,
    kontactSchemaUpdate,
};
