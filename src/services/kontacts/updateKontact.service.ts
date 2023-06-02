import { AppDataSource } from "../../data-source";
import { Kontact } from "../../entities/kontacts.entities";
import { AppError } from "../../errors";
import {
    TKontactResponse,
    TKontactUpdateRequest,
} from "../../interfaces/kontacts.interfaces";
import { kontactSchema } from "../../schemas/kontacts.schemas";

const updateKontactService = async (
    data: TKontactUpdateRequest,
    kontactId: string
): Promise<TKontactResponse> => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const oldKontact: Kontact | null = await kontactsRepository.findOneBy({
        id: kontactId,
    });

    if (!oldKontact) {
        throw new AppError("Kontact not found", 404);
    }

    const newKontactData = kontactsRepository.create({
        ...oldKontact,
        ...data,
    });

    await kontactsRepository.save(newKontactData);

    return kontactSchema.parse(newKontactData);
};

export { updateKontactService };
