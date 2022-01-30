import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createTask(body: any): Promise<string>;
    listTasks(): Promise<import("../entities/tasks.entity").Tasks[]>;
    modifyTask(idTask: number, body: any): Promise<string>;
    deleteTask(idTask: number): Promise<string>;
}
