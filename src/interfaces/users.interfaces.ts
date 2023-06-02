import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
} from "../schemas/users.schemas";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUser = z.infer<typeof userSchema>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdate = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
