import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const deleteUserService = async (userId: string): Promise<void> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    await usersRepository.remove(user);
};

export { deleteUserService };
