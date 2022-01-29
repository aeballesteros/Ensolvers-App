import { TasksService } from 'src/services/tasks.service';
export declare class TasksController {
    private task;
    constructor(task: TasksService);
    modifyTask(idTask: number, body: any): void;
}
