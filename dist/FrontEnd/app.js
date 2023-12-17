"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../Book");
const User_1 = require("../User");
const BookGenre_1 = require("./Enums/BookGenre");
const ShoppingCart_1 = require("./ShoppingCart");
// Example usage
const book1 = new Book_1.Book('The Great Gatsby', 'F. Scott Fitzgerald', BookGenre_1.BookGenre.Fiction, 15.99, 'cover1.jpg', 'A classic novel...', 4.5);
const book2 = new Book_1.Book('The Hobbit', 'J.R.R. Tolkien', BookGenre_1.BookGenre.Fiction, 9.99, 'cover2.jpg', 'An epic fantasy...', 4.7);
const cartItem1 = { book: book1, quantity: 2, subtotal: 31.98 };
const cartItem2 = { book: book2, quantity: 1, subtotal: 9.99 };
const user = new User_1.User('John Doe', 'john@example.com', '123 Main St', 'john123', 'password123');
const shoppingCart = new ShoppingCart_1.ShoppingCart();
shoppingCart.addItem(cartItem1);
shoppingCart.addItem(cartItem2);
console.log('Total Price:', shoppingCart.calculateTotal());
shoppingCart.displayCart();
user.authenticate('john123', 'password123');
user.logout();
//# sourceMappingURL=app.js.map