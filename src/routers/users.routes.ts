import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    retrieveUserController,
    updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schemas";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post(
    "",
    ensureDataIsValidMiddleware(userSchemaRequest),
    createUserController
);

usersRoutes.use(ensureAuthMiddleware);

usersRoutes.get("", retrieveUserController);

usersRoutes.patch(
    "",
    ensureDataIsValidMiddleware(userSchemaUpdate),
    updateUserController
);

usersRoutes.delete("", deleteUserController);

export { usersRoutes };
