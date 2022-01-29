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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("../entities/tasks.entity");
let UsersService = class UsersService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    createTask(body) {
        if (this.taskRepository.findOne(body.idTask)) {
            return "The task id already exists in the database.";
        }
        else {
            const newTask = this.taskRepository.create(body);
            this.taskRepository.save(newTask);
            return "Task created successfully.";
        }
    }
    listTask() {
        return this.taskRepository.find();
    }
    async modifyTask(idTask, body) {
        if (this.taskRepository.findOne(idTask)) {
            const aux = await this.taskRepository.findOne(idTask);
            this.taskRepository.merge(aux, body);
            this.taskRepository.save(aux);
            return "Task modified successfully";
        }
        else {
            return "The task you are trying to modify does not exist.";
        }
    }
    async deleteTask(idTask) {
        if (this.taskRepository.findOne(idTask)) {
            this.taskRepository.delete(idTask);
            return "Task deleted successfully";
        }
        else {
            return "The task you are trying to delete does not exist.";
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.Tasks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map