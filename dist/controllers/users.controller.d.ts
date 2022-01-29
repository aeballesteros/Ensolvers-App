import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createTask(body: any): void;
    listTasks(): void;
    modifyTask(idTask: number, body: any): void;
    deleteTask(idTask: number): void;
}
