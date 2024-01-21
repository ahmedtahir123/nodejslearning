import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  address!: string;

  @Column({unique : true})
  email!: string;
}