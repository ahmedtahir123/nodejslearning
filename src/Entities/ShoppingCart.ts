import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { users } from "./User";
import { OrderItem } from "./OrderItem";

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => users)
  @JoinColumn()
  user!: users;

  @OneToMany(() => OrderItem, orderItem => orderItem.shoppingCart)
  items!: OrderItem[];
}
