import { z } from "zod";
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    userSchemaUpdate,
} from "../schemas/users.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUser = z.infer<typeof userSchema>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdate = z.infer<typeof userSchemaUpdate>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
