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
exports.ensureIsOwnerMiddleware = void 0;
const data_source_1 = require("../data-source");
const kontacts_entities_1 = require("../entities/kontacts.entities");
const ensureIsOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const kontactsRepository = data_source_1.AppDataSource.getRepository(kontacts_entities_1.Kontact);
    const kontactId = req.params.id;
    const userId = res.locals.userId;
    const kontact = yield kontactsRepository.findOne({
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
});
exports.ensureIsOwnerMiddleware = ensureIsOwnerMiddleware;
