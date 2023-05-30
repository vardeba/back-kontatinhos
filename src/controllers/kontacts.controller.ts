import { Request, Response } from "express";
import { createKontactService } from "../services/kontacts/createKontact.service";
import { listKontactsService } from "../services/kontacts/listKontacts.service";
import { TKontactUpdateRequest } from "../interfaces/kontacts.interfaces";
import { updateKontactService } from "../services/kontacts/updateKontact.service";
import { deleteKontactService } from "../services/kontacts/deleteKontact.service";

const createKontactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const newKontact = await createKontactService(req.body, userId);

    return res.status(201).json(newKontact);
};

const listKontactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const tasks = await listKontactsService(userId);

    return res.json(tasks);
};

const updateKontactController = async (req: Request, res: Response) => {
    const kontactId = req.params.id;

    const updatedValues: TKontactUpdateRequest = req.body;

    const updatedTask = await updateKontactService(updatedValues, kontactId);

    return res.json(updatedTask);
};

const deleteKontactController = async (req: Request, res: Response) => {
    const kontactId = req.params.id;

    await deleteKontactService(kontactId);

    return res.status(204).send();
};

export {
    createKontactController,
    listKontactController,
    updateKontactController,
    deleteKontactController,
};
