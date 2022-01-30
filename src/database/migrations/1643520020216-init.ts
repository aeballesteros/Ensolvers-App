import {MigrationInterface, QueryRunner} from "typeorm";

export class init1643520020216 implements MigrationInterface {
    name = 'init1643520020216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`rol\` \`rol\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'P'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NULL DEFAULT 'P'`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`name\` \`name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`rol\` \`rol\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`name\` \`name\` varchar(255) NULL`);
    }

}
