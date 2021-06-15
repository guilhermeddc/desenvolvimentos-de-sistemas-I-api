import {MigrationInterface, QueryRunner} from "typeorm";

export class addLogoClient1623712851824 implements MigrationInterface {
    name = 'addLogoClient1623712851824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "logo" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "logo"`);
    }

}
