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
exports.UserManagerController = void 0;
const common_1 = require("@nestjs/common");
const user_manager_service_1 = require("../services/user-manager.service");
let UserManagerController = class UserManagerController {
    constructor(user) {
        this.user = user;
    }
    createUser(body) {
        this.user.createUser(body);
    }
    searchUser() {
        this.user.listUser();
    }
    modifyUser(idUser, body) {
        this.modifyUser(idUser, body);
    }
    deleteUser(idUser) {
        this.user.deleteUser(idUser);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserManagerController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserManagerController.prototype, "searchUser", null);
__decorate([
    (0, common_1.Put)('id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserManagerController.prototype, "modifyUser", null);
__decorate([
    (0, common_1.Delete)('id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserManagerController.prototype, "deleteUser", null);
UserManagerController = __decorate([
    (0, common_1.Controller)('user-manager'),
    __metadata("design:paramtypes", [user_manager_service_1.UserManagerService])
], UserManagerController);
exports.UserManagerController = UserManagerController;
//# sourceMappingURL=user-manager.controller.js.map