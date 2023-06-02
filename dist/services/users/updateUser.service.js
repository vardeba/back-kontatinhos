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
exports.updateUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const errors_1 = require("../../errors");
const users_schemas_1 = require("../../schemas/users.schemas");
const updateUserService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    const user = yield usersRepository.findOneBy({
        id: userId,
    });
    if (!user) {
        throw new errors_1.AppError("User not found!", 404);
    }
    const newUserData = usersRepository.create(Object.assign(Object.assign({}, user), data));
    yield usersRepository.save(newUserData);
    return users_schemas_1.userSchemaResponse.parse(newUserData);
});
exports.updateUserService = updateUserService;
