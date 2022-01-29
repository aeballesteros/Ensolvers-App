import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';
export declare class UserManagerService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    createUser(body: any): string;
    listUser(): Promise<Users[]>;
    modifyUser(idTask: number, body: any): Promise<string>;
    deleteUser(idTask: number): Promise<string>;
}
