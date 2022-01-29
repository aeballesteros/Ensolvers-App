import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';
export declare class UsersService {
    private taskRepository;
    constructor(taskRepository: Repository<Tasks>);
    createTask(body: any): string;
    listTask(): Promise<Tasks[]>;
    modifyTask(idTask: number, body: any): Promise<string>;
    deleteTask(idTask: number): Promise<string>;
}
