import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class books {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  genre!: number;

  @Column()
  price!: number;
}