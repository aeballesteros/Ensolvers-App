import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from 'src/entities/tasks.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Tasks) private taskRepository: Repository<Tasks>
    ){}
    

    createTask(body :any) : string{
        if(this.taskRepository.findOne(body.idTask)){
            return "The task id already exists in the database.";
        }else{
            const newTask = this.taskRepository.create(body);
            this.taskRepository.save(newTask)
            return "Task created successfully.";
        }
    }

    listTask(){
        return this.taskRepository.find();
    }

    async modifyTask(idTask: number,body: any) {
        if(this.taskRepository.findOne(idTask)){
            const aux = await this.taskRepository.findOne(idTask);
            this.taskRepository.merge(aux,body);
            this.taskRepository.save(aux);
            return "Task modified successfully";
        }else{
            return "The task you are trying to modify does not exist.";
        }
    }

    async deleteTask(idTask : number) {
        if(this.taskRepository.findOne(idTask)){
            this.taskRepository.delete(idTask);
            return "Task deleted successfully";
        }else{
            return "The task you are trying to delete does not exist.";
        }
    }

}
