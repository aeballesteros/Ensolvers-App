import { Tasks } from './tasks.entity';
export declare class Users {
    idUser: number;
    name: string;
    email: string;
    password: string;
    rol: string;
    Tasks: Tasks[];
}
