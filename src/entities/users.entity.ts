import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Tasks } from './tasks.entity';

@Entity()
export class Users{
    
    @PrimaryGeneratedColumn()
    idUser: number;
    
    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    email: string;
    
    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    rol: string;

    @OneToMany(type => Tasks, Tasks => Tasks.idTask)
    Tasks: Tasks[];
    
}