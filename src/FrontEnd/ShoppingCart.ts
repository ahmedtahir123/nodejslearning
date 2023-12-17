import { CartItem } from "./CartItem";


export class ShoppingCart<T extends CartItem> {
    cartItems: T[] = [];

    addItem(item: T): void {
        this.cartItems.push(item);
      }
  
      removeItem(item: T): void {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
  
      calculateTotal(): number {
        return this.cartItems.reduce((total, item) => total + item.subtotal, 0);
      }
  
      displayCart(): void {
        this.cartItems.forEach((item) => {
          console.log(`Book: ${item.book.title}, Quantity: ${item.quantity}, Subtotal: $${item.subtotal}`);
        });
      }
}