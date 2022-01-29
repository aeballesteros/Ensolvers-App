import { UserManagerService } from 'src/services/user-manager.service';
export declare class UserManagerController {
    private user;
    constructor(user: UserManagerService);
    createUser(body: any): Promise<"The User id already exists in the database." | "User created successfully.">;
    listUser(): Promise<import("../entities/users.entity").Users[]>;
    modifyUser(idUser: number, body: any): any;
    deleteUser(idUser: number): Promise<"User deleted successfully" | "The user you are trying to delete does not exist.">;
}
