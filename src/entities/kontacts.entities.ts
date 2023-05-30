import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entities";

@Entity("kontacts")
class Kontact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 20 })
    phoneNumber: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @ManyToOne(() => User)
    user: User;
}

export { Kontact };
