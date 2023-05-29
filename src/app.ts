import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { userRoutes } from "./routers/users.routes";

export const app: Application = express();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => res.json("hello world"));
