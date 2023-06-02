import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { usersRoutes } from "./routers/users.routes";
import { handleErrors } from "./errors";
import { loginRoutes } from "./routers/login.routes";
import { kontactsRoutes } from "./routers/kontacts.routes";

export const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/login", loginRoutes);

app.use("/kontacts", kontactsRoutes);

app.use(handleErrors);
