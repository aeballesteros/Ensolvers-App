import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';
export declare class UsersService {
    private taskRepository;
    constructor(taskRepository: Repository<Tasks>);
    createTask(body: any): Promise<"The task id already exists in the database." | "Task created successfully.">;
    listTask(): Promise<Tasks[]>;
    modifyTask(idTask: number, body: any): Promise<"Task modified successfully" | "The task you are trying to modify does not exist.">;
    deleteTask(idTask: number): Promise<"Task deleted successfully" | "The task you are trying to delete does not exist.">;
}
