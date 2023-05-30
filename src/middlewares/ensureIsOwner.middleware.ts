import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Kontact } from "../entities/kontacts.entities";

const ensureIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const kontactsRepository = AppDataSource.getRepository(Kontact);

    const kontactId: string = req.params.id;

    const userId: string = res.locals.userId;

    const kontact = await kontactsRepository.findOne({
        where: {
            id: kontactId,
        },
        relations: {
            user: true,
        },
    });

    if (!kontact) {
        return res.status(404).json({
            message: "Kontact not found",
        });
    }

    if (kontact.user.id !== userId) {
        return res.status(403).json({
            message: "You don't have permission",
        });
    }

    return next();
};

export { ensureIsOwnerMiddleware };
