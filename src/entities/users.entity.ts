import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Tasks } from './tasks.entity';

@Entity()
export class Users{
    
    @PrimaryGeneratedColumn()
    idUser: number;
    
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    rol: string;

    @OneToMany(type => Tasks, Tasks => Tasks.idTask)
    Tasks: Tasks[];
    
}