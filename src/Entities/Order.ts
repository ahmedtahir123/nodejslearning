import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { users } from "./User";
import { OrderItem } from "./OrderItem";

@Entity()
export class orders {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => users)
  user!: users;

  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  items!: OrderItem[];
}
