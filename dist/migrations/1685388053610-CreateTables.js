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
exports.CreateTables1685388053610 = void 0;
class CreateTables1685388053610 {
    constructor() {
        this.name = 'CreateTables1685388053610';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "kontacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_2ff1b31348e1764bd247ba8279e" UNIQUE ("email"), CONSTRAINT "PK_d2980b5ce87dfe7b63deb1f7d7f" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
            yield queryRunner.query(`DROP TABLE "kontacts"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.CreateTables1685388053610 = CreateTables1685388053610;
