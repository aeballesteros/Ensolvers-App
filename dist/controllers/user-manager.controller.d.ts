import { UserManagerService } from 'src/services/user-manager.service';
export declare class UserManagerController {
    private user;
    constructor(user: UserManagerService);
    createUser(body: any): void;
    searchUser(): void;
    modifyUser(idUser: number, body: any): void;
    deleteUser(idUser: number): void;
}
