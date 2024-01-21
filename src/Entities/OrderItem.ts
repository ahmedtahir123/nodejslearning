import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { books } from "./Book";
import { ShoppingCart } from "./ShoppingCart";
import { orders } from "./Order";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => books)
  book!: books;

  @ManyToOne(() => ShoppingCart, shoppingCart => shoppingCart.items)
  shoppingCart!: ShoppingCart;

  @ManyToOne(() => orders, order => order.items)
  order!: orders;

  @Column()
  quantity!: number;
}
