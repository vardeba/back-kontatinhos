"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("./routers/users.routes");
const errors_1 = require("./errors");
const login_routes_1 = require("./routers/login.routes");
const kontacts_routes_1 = require("./routers/kontacts.routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/users", users_routes_1.usersRoutes);
exports.app.use("/login", login_routes_1.loginRoutes);
exports.app.use("/kontacts", kontacts_routes_1.kontactsRoutes);
exports.app.use(errors_1.handleErrors);
