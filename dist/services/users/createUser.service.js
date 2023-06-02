"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const errors_1 = require("../../errors");
const users_schemas_1 = require("../../schemas/users.schemas");
const bcryptjs_1 = require("bcryptjs");
const createUserService = ({ name, email, password, phoneNumber, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    const findUser = yield userRepository.findOne({
        where: {
            email,
        },
    });
    if (findUser) {
        throw new errors_1.AppError("User already exists", 409);
    }
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
    });
    yield userRepository.save(user);
    return users_schemas_1.userSchemaResponse.parse(user);
});
exports.createUserService = createUserService;
