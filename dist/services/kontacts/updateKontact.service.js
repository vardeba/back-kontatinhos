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
exports.updateKontactService = void 0;
const data_source_1 = require("../../data-source");
const kontacts_entities_1 = require("../../entities/kontacts.entities");
const errors_1 = require("../../errors");
const kontacts_schemas_1 = require("../../schemas/kontacts.schemas");
const updateKontactService = (data, kontactId) => __awaiter(void 0, void 0, void 0, function* () {
    const kontactsRepository = data_source_1.AppDataSource.getRepository(kontacts_entities_1.Kontact);
    const oldKontact = yield kontactsRepository.findOneBy({
        id: kontactId,
    });
    if (!oldKontact) {
        throw new errors_1.AppError("Kontact not found", 404);
    }
    const newKontactData = kontactsRepository.create(Object.assign(Object.assign({}, oldKontact), data));
    yield kontactsRepository.save(newKontactData);
    return kontacts_schemas_1.kontactSchema.parse(newKontactData);
});
exports.updateKontactService = updateKontactService;
