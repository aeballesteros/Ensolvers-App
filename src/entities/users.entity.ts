import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

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
    status: string;

    @Column()
    rol: string;
    
}