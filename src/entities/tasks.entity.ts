import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Users } from './users.entity';

@Entity()
export class Tasks{
    
    @PrimaryGeneratedColumn()
    idTask: number;
    
    @Column()
    name: string;

    @Column({default: "P"})
    status: string;
    
    @ManyToOne(type => Users, Users => Users.idUser)
    Users: Users[];
}