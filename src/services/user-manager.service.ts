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
        if(this.userRepository.findOne(body.idTask)){
            return "The User id already exists in the database.";
        }else{
            const newUser = this.userRepository.create(body);
            this.userRepository.save(newUser)
            return "User created successfully.";
        }
    }

    listUser(){
        return this.userRepository.find();
    }

    async modifyUser(idUser: number,body: any) {
        if(this.userRepository.findOne(idUser)){
            const aux = await this.userRepository.findOne(idUser);
            this.userRepository.merge(aux,body);
            this.userRepository.save(aux);
            return "User modified successfully";
        }else{
            return "The user you are trying to modify does not exist.";
        }
    }

    async deleteUser(idUser : number) {
        if(this.userRepository.findOne(idUser)){
            this.userRepository.delete(idUser);
            return "User deleted successfully";
        }else{
            return "The user you are trying to delete does not exist.";
        }
    }


}
