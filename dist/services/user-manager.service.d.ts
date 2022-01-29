import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';
export declare class UserManagerService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    createUser(body: any): string;
    listUser(): Promise<Users[]>;
    modifyUser(idUser: number, body: any): Promise<"User modified successfully" | "The user you are trying to modify does not exist.">;
    deleteUser(idUser: number): Promise<"User deleted successfully" | "The user you are trying to delete does not exist.">;
}
