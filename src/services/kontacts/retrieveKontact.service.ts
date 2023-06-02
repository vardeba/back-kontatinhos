import { AppDataSource } from "../../data-source";
import { Kontact } from "../../entities/kontacts.entities";
import { AppError } from "../../errors";
import { TKontact } from "../../interfaces/kontacts.interfaces";

const retrieveKontactService = async (kontactId: string): Promise<TKontact> => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const kontact: Kontact | null = await kontactsRepository.findOne({
        where: {
            id: kontactId,
        },
    });

    if (!kontact) {
        throw new AppError("Kontact not found!", 404);
    }

    return kontact;
};

export { retrieveKontactService };
