"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let Tasks = class Tasks {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tasks.prototype, "idTask", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "P" }),
    __metadata("design:type", String)
], Tasks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => users_entity_1.Users, Users => Users.idUser),
    __metadata("design:type", Array)
], Tasks.prototype, "Users", void 0);
Tasks = __decorate([
    (0, typeorm_1.Entity)()
], Tasks);
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.entity.js.map