import { Router } from "express";
import {
    createKontactController,
    deleteKontactController,
    listKontactController,
    retrieveKontactController,
    updateKontactController,
} from "../controllers/kontacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
    kontactSchemaRequest,
    kontactSchemaUpdate,
} from "../schemas/kontacts.schemas";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const kontactsRoutes = Router();

kontactsRoutes.use(ensureAuthMiddleware);

kontactsRoutes.post(
    "",
    ensureDataIsValidMiddleware(kontactSchemaRequest),
    createKontactController
);

kontactsRoutes.get("", listKontactController);

kontactsRoutes.get("/:id", retrieveKontactController);

kontactsRoutes.patch(
    "/:id",
    ensureIsOwnerMiddleware,
    ensureDataIsValidMiddleware(kontactSchemaUpdate),
    updateKontactController
);

kontactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteKontactController);

export { kontactsRoutes };
