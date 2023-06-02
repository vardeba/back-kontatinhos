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
exports.KontactsOnDeleteCascade1685480203231 = void 0;
class KontactsOnDeleteCascade1685480203231 {
    constructor() {
        this.name = 'KontactsOnDeleteCascade1685480203231';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
            yield queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
            yield queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.KontactsOnDeleteCascade1685480203231 = KontactsOnDeleteCascade1685480203231;
