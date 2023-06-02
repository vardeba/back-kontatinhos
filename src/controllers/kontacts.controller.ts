import { Request, Response } from "express";
import { createKontactService } from "../services/kontacts/createKontact.service";
import { listKontactsService } from "../services/kontacts/listKontacts.service";
import { TKontactUpdateRequest } from "../interfaces/kontacts.interfaces";
import { updateKontactService } from "../services/kontacts/updateKontact.service";
import { deleteKontactService } from "../services/kontacts/deleteKontact.service";
import { retrieveKontactService } from "../services/kontacts/retrieveKontact.service";

const createKontactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const newKontact = await createKontactService(req.body, userId);

    return res.status(201).json(newKontact);
};

const listKontactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const kontacts = await listKontactsService(userId);

    return res.json(kontacts);
};

const retrieveKontactController = async (req: Request, res: Response) => {
    const kontactId = req.params.id;
    console.log(kontactId);

    const kontact = await retrieveKontactService(kontactId);

    return res.json(kontact);
};

const updateKontactController = async (req: Request, res: Response) => {
    const kontactId = req.params.id;

    const updatedValues: TKontactUpdateRequest = req.body;

    const updatedKontact = await updateKontactService(updatedValues, kontactId);

    return res.json(updatedKontact);
};

const deleteKontactController = async (req: Request, res: Response) => {
    const kontactId = req.params.id;

    await deleteKontactService(kontactId);

    return res.status(204).send();
};

export {
    createKontactController,
    listKontactController,
    retrieveKontactController,
    updateKontactController,
    deleteKontactController,
};
