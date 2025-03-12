// import { MigrationInterface, QueryRunner } from "typeorm";

// export class Migration11741008582812 implements MigrationInterface {
//     name = 'Migration11741008582812'

//     public async up(queryRunner: QueryRunner): Promise<void> {
    
//         await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying`);
//         await queryRunner.query(`UPDATE "user" SET "password" = 'temp_password' WHERE "password" IS NULL`);
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
//         await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profileId"`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
        
//         await queryRunner.query(`ALTER TABLE "user" ADD "profileId" integer`);
//         await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
//     }
// }
