import { Injectable,Param} from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class UserManagerService {
    
    constructor(User : UsersService){} 
    
    create(User): string{
        return "Usuario creado con exito"
    }

    modify(User): string {
        return "Usuario modificado con exito"
    } 
    
    search(){

    }

    delete(@Param('id') idUser : number) : string{
        return "Usuario borrado con exito"
    }

}
