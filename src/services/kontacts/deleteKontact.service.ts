import { AppDataSource } from "../../data-source";
import { Kontact } from "../../entities/kontacts.entities";
import { AppError } from "../../errors";

const deleteKontactService = async (kontactId: string): Promise<void> => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const kontact: Kontact | null = await kontactsRepository.findOneBy({
        id: kontactId,
    });

    if (!kontact) {
        throw new AppError("Kontact not found", 404);
    }

    await kontactsRepository.remove(kontact);
};

export { deleteKontactService };
