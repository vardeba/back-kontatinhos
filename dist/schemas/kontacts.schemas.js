"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kontactSchemaUpdate = exports.kontactSchemaResponse = exports.kontactSchemaRequest = exports.kontactSchema = void 0;
const zod_1 = require("zod");
const kontactSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().max(100),
    email: zod_1.z.string().email().max(120),
    phoneNumber: zod_1.z.string().max(20),
    createdAt: zod_1.z.date().or(zod_1.z.string()),
});
exports.kontactSchema = kontactSchema;
const kontactSchemaRequest = kontactSchema.omit({
    id: true,
    createdAt: true,
});
exports.kontactSchemaRequest = kontactSchemaRequest;
const kontactSchemaResponse = kontactSchema.array();
exports.kontactSchemaResponse = kontactSchemaResponse;
const kontactSchemaUpdate = kontactSchemaRequest.partial();
exports.kontactSchemaUpdate = kontactSchemaUpdate;
