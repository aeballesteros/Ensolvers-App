"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const tasks_service_1 = require("./services/tasks.service");
const tasks_controller_1 = require("./controllers/tasks.controller");
const user_manager_controller_1 = require("./controllers/user-manager.controller");
const user_manager_service_1 = require("./services/user-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("./entities/tasks.entity");
const users_entity_1 = require("./entities/users.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'newuser',
                password: 'password',
                database: 'mydb',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: false,
                retryDelay: 2000,
                retryAttempts: 10,
            }),
            typeorm_1.TypeOrmModule.forFeature([tasks_entity_1.Tasks, users_entity_1.Users])
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, tasks_controller_1.TasksController, user_manager_controller_1.UserManagerController],
        providers: [app_service_1.AppService, users_service_1.UsersService, tasks_service_1.TasksService, user_manager_service_1.UserManagerService, typeorm_2.Repository],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map