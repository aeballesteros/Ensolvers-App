import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createTask(body: any): Promise<"The task id already exists in the database." | "Task created successfully.">;
    listTasks(): Promise<import("../entities/tasks.entity").Tasks[]>;
    modifyTask(idTask: number, body: any): Promise<"Task modified successfully" | "The task you are trying to modify does not exist.">;
    deleteTask(idTask: number): Promise<"Task deleted successfully" | "The task you are trying to delete does not exist.">;
}
