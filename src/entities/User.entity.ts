import { Entity, PrimaryGeneratedColumn, Column , OneToOne , JoinColumn, OneToMany} from "typeorm"
@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

    @Column()
    password: string;

    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.password = "";
        this.isActive = false;
    }
}
