import { AppDataSource } from "../../data-source";
import { Kontact } from "../../entities/kontacts.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import {
    TKontactRequest,
    TKontactResponse,
} from "../../interfaces/kontacts.interfaces";
import { kontactSchema } from "../../schemas/kontacts.schemas";

const createKontactService = async (
    data: TKontactRequest,
    userId: string
): Promise<TKontactResponse> => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const usersRepository = AppDataSource.getRepository(User);

    const user: User | null = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    const kontact: Kontact = kontactsRepository.create({
        ...data,
        user,
    });

    await kontactsRepository.save(kontact);

    return kontactSchema.parse(kontact);
};

export { createKontactService };
