import { MigrationInterface, QueryRunner } from "typeorm";

export class KontactsOnDeleteCascade1685480203231 implements MigrationInterface {
    name = 'KontactsOnDeleteCascade1685480203231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
        await queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontacts" DROP CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a"`);
        await queryRunner.query(`ALTER TABLE "kontacts" ADD CONSTRAINT "FK_dcb7e592ab0d39e5bd3f739457a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
