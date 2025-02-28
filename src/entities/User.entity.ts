import { Entity, PrimaryGeneratedColumn, Column , OneToOne , JoinColumn} from "typeorm"
import { Profile } from "./profile.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    @OneToOne(()=> Profile , {cascade:true})
    @JoinColumn()
    profile:Profile;
}