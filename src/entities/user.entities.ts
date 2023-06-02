import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Kontact } from "./kontacts.entities";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 20 })
    phoneNumber: string;

    @Column({ length: 255, nullable: true })
    userImage: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @OneToMany(() => Kontact, (kontact) => kontact.user)
    kontacts: Kontact[];
}

export { User };
