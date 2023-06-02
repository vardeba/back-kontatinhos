import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteKontactPassword1685416199282 implements MigrationInterface {
    name = 'DeleteKontactPassword1685416199282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" ADD "password" character varying(120) NOT NULL`);
    }

}
