"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const users_schemas_1 = require("../schemas/users.schemas");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post("", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(users_schemas_1.userSchemaRequest), users_controller_1.createUserController);
usersRoutes.use(ensureAuth_middleware_1.ensureAuthMiddleware);
usersRoutes.get("", users_controller_1.retrieveUserController);
usersRoutes.patch("", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(users_schemas_1.userSchemaUpdate), users_controller_1.updateUserController);
usersRoutes.delete("", users_controller_1.deleteUserController);
