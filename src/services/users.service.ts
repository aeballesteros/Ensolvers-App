import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Tasks) private taskRepository: Repository<Tasks>
    ){}
    

    async createTask(body :any) {
        const newTask = this.taskRepository.create(body);
        this.taskRepository.save(newTask)
        return "Task created successfully.";
        
    }

    listTask(){
        return this.taskRepository.find();
    }

    async modifyTask(idTask: number,body: any) {
        const aux = await this.taskRepository.findOne(idTask);
        this.taskRepository.merge(aux,body);
        this.taskRepository.save(aux);
        return "Task modified successfully";

    }

    async deleteTask(idTask : number) {
        this.taskRepository.delete(idTask);
        return "Task deleted successfully";
    }

}
