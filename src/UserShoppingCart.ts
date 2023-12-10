import { Book } from "./Book";

interface ShoppingCart {
    addBook(book: Book): void
    removeBook(book: Book): void
    viewCart(): Book[]
}

export class UserShoppingCart implements ShoppingCart {
    cart: Book[] = [];
  
    addBook(book: Book): void {
      this.cart.push(book);
    }
  
    removeBook(book: Book): void {
      const index = this.cart.indexOf(book);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  
    viewCart(): Book[] {
      return this.cart;
    }
  }