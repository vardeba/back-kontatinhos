import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post(
    "",
    ensureDataIsValidMiddleware(userSchemaRequest),
    createUserController
);

export { userRoutes };
