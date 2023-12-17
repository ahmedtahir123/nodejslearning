import { Book } from "../Book";
import { User } from "../User";
import { CartItem } from "./CartItem";
import { BookGenre } from "./Enums/BookGenre";
import { ShoppingCart } from "./ShoppingCart";

 // Example usage
 const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', BookGenre.Fiction, 15.99, 'cover1.jpg', 'A classic novel...', 4.5);
 const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', BookGenre.Fiction, 9.99, 'cover2.jpg', 'An epic fantasy...', 4.7);

 const cartItem1: CartItem = { book: book1, quantity: 2, subtotal: 31.98 };
 const cartItem2: CartItem = { book: book2, quantity: 1, subtotal: 9.99 };

 const user = new User('John Doe', 'john@example.com', '123 Main St', 'john123', 'password123');

 const shoppingCart = new ShoppingCart<CartItem>();
 shoppingCart.addItem(cartItem1);
 shoppingCart.addItem(cartItem2);

 console.log('Total Price:', shoppingCart.calculateTotal());
 shoppingCart.displayCart();

 user.authenticate('john123', 'password123');
 user.logout();