import { Entity, PrimaryGeneratedColumn, Column , OneToOne , JoinColumn, ManyToOne} from "typeorm"
import { Profile } from "./profile.entity"
import { User } from "./User.entity";

@Entity({name:"Todo"})
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    title: string;

    @Column({nullable:true})
    description: string;

    @Column({default:false})
    isCompleted: boolean

    @ManyToOne(()=> User , (user) => user.todos)
    user:User;

}