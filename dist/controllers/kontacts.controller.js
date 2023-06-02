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
exports.deleteKontactController = exports.updateKontactController = exports.retrieveKontactController = exports.listKontactController = exports.createKontactController = void 0;
const createKontact_service_1 = require("../services/kontacts/createKontact.service");
const listKontacts_service_1 = require("../services/kontacts/listKontacts.service");
const updateKontact_service_1 = require("../services/kontacts/updateKontact.service");
const deleteKontact_service_1 = require("../services/kontacts/deleteKontact.service");
const retrieveKontact_service_1 = require("../services/kontacts/retrieveKontact.service");
const createKontactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const newKontact = yield (0, createKontact_service_1.createKontactService)(req.body, userId);
    return res.status(201).json(newKontact);
});
exports.createKontactController = createKontactController;
const listKontactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const kontacts = yield (0, listKontacts_service_1.listKontactsService)(userId);
    return res.json(kontacts);
});
exports.listKontactController = listKontactController;
const retrieveKontactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kontactId = req.params.id;
    console.log(kontactId);
    const kontact = yield (0, retrieveKontact_service_1.retrieveKontactService)(kontactId);
    return res.json(kontact);
});
exports.retrieveKontactController = retrieveKontactController;
const updateKontactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kontactId = req.params.id;
    const updatedValues = req.body;
    const updatedKontact = yield (0, updateKontact_service_1.updateKontactService)(updatedValues, kontactId);
    return res.json(updatedKontact);
});
exports.updateKontactController = updateKontactController;
const deleteKontactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kontactId = req.params.id;
    yield (0, deleteKontact_service_1.deleteKontactService)(kontactId);
    return res.status(204).send();
});
exports.deleteKontactController = deleteKontactController;
