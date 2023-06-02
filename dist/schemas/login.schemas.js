"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(120),
    password: zod_1.z.string().min(4).max(20),
});
exports.loginSchema = loginSchema;
