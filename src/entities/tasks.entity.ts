import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Users } from './users.entity';

@Entity()
export class Tasks{
    
    @PrimaryGeneratedColumn()
    idTask: number;
    
    @Column({nullable: false})
    name: string;

    @Column({nullable: false,default: "P"})
    status: string;
    
    @ManyToOne(type => Users, Users => Users.idUser)
    Users: Users[];
}