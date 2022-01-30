"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1643520020216 = void 0;
class init1643520020216 {
    constructor() {
        this.name = 'init1643520020216';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`rol\` \`rol\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'P'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NULL DEFAULT 'P'`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`name\` \`name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`rol\` \`rol\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`name\` \`name\` varchar(255) NULL`);
    }
}
exports.init1643520020216 = init1643520020216;
//# sourceMappingURL=1643520020216-init.js.map