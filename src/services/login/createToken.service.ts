import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async ({
    email,
    password,
}: TLoginRequest): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        throw new AppError("Invalid credentials", 403);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403);
    }

    const token = jwt.sign({ username: user.name }, process.env.SECRET_KEY!, {
        expiresIn: process.env.EXPIRES_IN,
        subject: user.id,
    });

    return token;
};

export { createTokenService };
