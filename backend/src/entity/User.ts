import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
