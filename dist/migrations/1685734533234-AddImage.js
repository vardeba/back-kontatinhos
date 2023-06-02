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
exports.AddImage1685734533234 = void 0;
class AddImage1685734533234 {
    constructor() {
        this.name = 'AddImage1685734533234';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ADD "userImage" character varying(255)`);
            yield queryRunner.query(`ALTER TABLE "kontacts" ADD "kontactImage" character varying(255)`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "kontacts" DROP COLUMN "kontactImage"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userImage"`);
        });
    }
}
exports.AddImage1685734533234 = AddImage1685734533234;
