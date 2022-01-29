import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';

@Injectable()
export class TasksService {
    
    constructor(@InjectRepository(Tasks) private taskRepository: Repository<Tasks>){}

    async completeTask(idTask: number,body: any){
        const aux = await this.taskRepository.findOne(idTask);
        aux.status="C";
        this.taskRepository.save(aux);
        return "Task Complete"
    }

}
