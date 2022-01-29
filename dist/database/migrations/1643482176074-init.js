"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1643482176074 = void 0;
class init1643482176074 {
    constructor() {
        this.name = 'init1643482176074';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`rol\` varchar(255) NOT NULL, PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tasks\` (\`idTask\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'P', \`usersIdUser\` int NULL, PRIMARY KEY (\`idTask\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD CONSTRAINT \`FK_f682fa7c2d4d8497ce2aa57a281\` FOREIGN KEY (\`usersIdUser\`) REFERENCES \`users\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP FOREIGN KEY \`FK_f682fa7c2d4d8497ce2aa57a281\``);
        await queryRunner.query(`DROP TABLE \`tasks\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
exports.init1643482176074 = init1643482176074;
//# sourceMappingURL=1643482176074-init.js.map