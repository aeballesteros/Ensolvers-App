import { Controller, Put, Param, Body} from '@nestjs/common';
import { TasksService } from 'src/services/tasks.service';

@Controller('tasks')
export class TasksController {
    
    constructor(private task : TasksService){}

    @Put('complete/:id')
    completeTask(@Param('id') idTask: number, @Body() body: any){
        this.task.completeTask(idTask,body);
    }

    @Put('pending/:id')
    pendingTask(@Param('id') idTask: number, @Body() body: any){
        this.task.completeTask(idTask,body);
    }
}
