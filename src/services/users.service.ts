import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';
import { Tasks } from 'src/entities/tasks.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
        @InjectRepository(Tasks) private taskRepository: Repository<Tasks>
    ){}
    

    createTask(body :any) : string{
        const newTask = this.taskRepository.create(body);
        return "Task created successfully";
    }

    listTask(){
        return this.taskRepository.find();
    }

    async modifyTask(idTask: number,body: any) {
        const aux = await this.taskRepository.findOne(idTask);
        this.taskRepository.merge(aux,body);
        return "Task modified successfully";
    }

    async deleteTask(idTask : number) {
        this.taskRepository.delete(idTask);
        return "Task deleted successfully";
    }

}
