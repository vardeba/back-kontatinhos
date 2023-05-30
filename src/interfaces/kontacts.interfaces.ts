import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
    kontactSchema,
    kontactSchemaRequest,
    kontactSchemaResponse,
} from "../schemas/kontacts.schemas";

type TKontact = z.infer<typeof kontactSchema>;

type TKontactRequest = z.infer<typeof kontactSchemaRequest>;

type TKontactResponse = z.infer<typeof kontactSchema>;

type TKontacstResponse = z.infer<typeof kontactSchemaResponse>;

type TKontactUpdateRequest = DeepPartial<TKontactRequest>;

export {
    TKontact,
    TKontactRequest,
    TKontactResponse,
    TKontacstResponse,
    TKontactUpdateRequest,
};
