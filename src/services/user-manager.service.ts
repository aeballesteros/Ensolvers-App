import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';
import { Tasks } from 'src/entities/tasks.entity';

@Injectable()
export class UserManagerService {
    
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
    ){}
    
    createUser(body :any) : string{
        const newTask = this.userRepository.create(body);
        return "Task created successfully";
    }

    listUser(){
        return this.userRepository.find();
    }

    async modifyUser(idTask: number,body: any) {
        const aux = await this.userRepository.findOne(idTask);
        this.userRepository.merge(aux,body);
        return "Task modified successfully";
    }

    async deleteUser(idTask : number) {
        this.userRepository.delete(idTask);
        return "Task deleted successfully";
    }

}
