import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';

@Injectable()
export class UserManagerService {
    
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
    ){}
    
    async createUser(body :any){
        const aux = await this.userRepository.findOne(body.idTask)
        if(aux){
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
