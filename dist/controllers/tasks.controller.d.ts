import { TasksService } from 'src/services/tasks.service';
export declare class TasksController {
    private task;
    constructor(task: TasksService);
    completeTask(idTask: number, body: any): void;
    pendingTask(idTask: number, body: any): void;
}
