import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUserService = async (
    data: TUserRequest,
    userId: string
): Promise<TUserResponse> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    const newUserData = usersRepository.create({
        ...user,
        ...data,
    });

    await usersRepository.save(newUserData);

    return userSchemaResponse.parse(newUserData);
};

export { updateUserService };
