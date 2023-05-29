import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
    return res.status(201).json("Usuário criado com sucesso!");
};

export { createUserController };
