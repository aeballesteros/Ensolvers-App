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
exports.UserManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
let UserManagerService = class UserManagerService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(body) {
        const aux = await this.userRepository.findOne(body.idTask);
        if (aux) {
            return "The User id already exists in the database.";
        }
        else {
            const newUser = this.userRepository.create(body);
            this.userRepository.save(newUser);
            return "User created successfully.";
        }
    }
    listUser() {
        return this.userRepository.find();
    }
    async modifyUser(idUser, body) {
        if (this.userRepository.findOne(idUser)) {
            const aux = await this.userRepository.findOne(idUser);
            this.userRepository.merge(aux, body);
            this.userRepository.save(aux);
            return "User modified successfully";
        }
        else {
            return "The user you are trying to modify does not exist.";
        }
    }
    async deleteUser(idUser) {
        if (this.userRepository.findOne(idUser)) {
            this.userRepository.delete(idUser);
            return "User deleted successfully";
        }
        else {
            return "The user you are trying to delete does not exist.";
        }
    }
};
UserManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserManagerService);
exports.UserManagerService = UserManagerService;
//# sourceMappingURL=user-manager.service.js.map