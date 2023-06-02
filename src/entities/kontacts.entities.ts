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

    @Column({ length: 255, nullable: true })
    kontactImage: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @ManyToOne(() => User, (user) => user.kontacts, { onDelete: "CASCADE" })
    user: User;
}

export { Kontact };
