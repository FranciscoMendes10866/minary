import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('posts')
export default class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    category: string;

    @Column()
    title: string;

    @Column()
    subTitle: string;

    @Column()
    description: string;

    @Column()
    body: string;

    @Column()
    authorId: number;

    @Column()
    authorEmail: string;

    @Column()
    authorUsername: string;
}
