import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685388053610 implements MigrationInterface {
    name = 'CreateTables1685388053610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "kontacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_2ff1b31348e1764bd247ba8279e" UNIQUE ("email"), CONSTRAINT "PK_d2980b5ce87dfe7b63deb1f7d7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
        await queryRunner.query(`DROP TABLE "kontacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
