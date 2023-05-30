import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { userSchemaResponse } from "../../schemas/users.schemas";

const retrieveUsersService = async (userId: string): Promise<TUserResponse> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    return userSchemaResponse.parse(user);
};

export default retrieveUsersService;
