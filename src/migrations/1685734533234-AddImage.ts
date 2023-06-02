import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImage1685734533234 implements MigrationInterface {
    name = 'AddImage1685734533234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "userImage" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "kontacts" ADD "kontactImage" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" DROP COLUMN "kontactImage"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userImage"`);
    }

}
