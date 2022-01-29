import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Tasks{
    
    @PrimaryGeneratedColumn()
    idTask: number;
    
    @Column()
    name: string;

    @Column({default: "P"})
    status: string;
    
}