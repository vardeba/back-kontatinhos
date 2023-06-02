import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import retrieveUsersService from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
    const { email, name, password, phoneNumber }: TUserRequest = req.body;

    const newUser = await createUserService({
        email,
        name,
        password,
        phoneNumber,
    });

    return res.status(201).json(newUser);
};

const retrieveUserController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const user = await retrieveUsersService(userId);

    return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const newUserData = await updateUserService(req.body, userId);

    return res.status(201).json(newUserData);
};

const deleteUserController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    await deleteUserService(userId);

    return res.status(204).send();
};

export {
    createUserController,
    retrieveUserController,
    updateUserController,
    deleteUserController,
};
