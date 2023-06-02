import { AppDataSource } from "../../data-source";
import { Kontact } from "../../entities/kontacts.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { TKontacstResponse } from "../../interfaces/kontacts.interfaces";
import { kontactSchemaResponse } from "../../schemas/kontacts.schemas";

const listKontactsService = async (
    userId: string
): Promise<TKontacstResponse> => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const usersRepository = AppDataSource.getRepository(User);

    const user: User | null = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    const kontacts: Kontact[] = await kontactsRepository.find({
        where: {
            user: user,
        },
    });

    return kontactSchemaResponse.parse(kontacts);
};

export { listKontactsService };
