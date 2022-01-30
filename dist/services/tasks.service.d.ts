import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Tasks>);
    completeTask(idTask: number, body: any): Promise<string>;
    pendingTask(idTask: number, body: any): Promise<string>;
}
