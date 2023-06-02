"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaUpdate = exports.userSchemaResponse = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().max(100),
    email: zod_1.z.string().email().max(120),
    password: zod_1.z.string().min(4).max(20),
    phoneNumber: zod_1.z.string().max(20),
    createdAt: zod_1.z.date().or(zod_1.z.string()),
});
exports.userSchema = userSchema;
const userSchemaRequest = userSchema.omit({
    id: true,
    createdAt: true,
});
exports.userSchemaRequest = userSchemaRequest;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const userSchemaUpdate = userSchemaRequest.partial();
exports.userSchemaUpdate = userSchemaUpdate;
