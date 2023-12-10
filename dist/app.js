"use strict";
// class Book {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = __importDefault(require("./Admin"));
const Book_1 = require("./Book");
const CreditCardPayment_1 = require("./CreditCardPayment");
const Ebook_1 = require("./Ebook");
const User_1 = require("./User");
const UserShoppingCart_1 = __importDefault(require("./UserShoppingCart"));
//     constructor(private title: string, private author: string, private genre: string, private price: number) { }
//     getTitle(): string {
//         return this.title;
//     }
//     setTitle(title: string): void {
//         this.title = title;
//     }
//     getAuthor(): string {
//         return this.author;
//     }
//     setAuthor(author: string): void {
//         this.author = author;
//     }
//     getGenre(): string {
//         return this.genre;
//     }
//     setGenre(genre: string): void {
//         this.genre = genre;
//     }
//     getPrice(): number {
//         return this.price;
//     }
//     setPrice(price: number): void {
//         this.price = price;
//     }
//     displayDetails(): void {
//         console.log(`Title: ${this.title}`);
//         console.log(`Author: ${this.author}`);
//         console.log(`Genre: ${this.genre}`);
//         console.log(`Price: $${this.price}`);
//       }
// }
// // const myBook = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 19.99);
// // console.log("Title:", myBook.getTitle());
// // console.log("Author:", myBook.getAuthor());
// // console.log("Genre:", myBook.getGenre());
// // console.log("Price:", myBook.getPrice());
// // myBook.setTitle("New Title");
// // myBook.setAuthor("New Author");
// // myBook.setGenre("New Genre");
// // myBook.setPrice(29.99);
// // console.log("Updated Title:", myBook.getTitle());
// // console.log("Updated Author:", myBook.getAuthor());
// // console.log("Updated Genre:", myBook.getGenre());
// // console.log("Updated Price:", myBook.getPrice());
// // myBook.displayDetails()
// class User {
//     constructor(public name: string, public email: string,  public address: string) {}
//     getName(): string {
//       return this.name;
//     }
//     setName(name: string): void {
//       this.name = name;
//     }
//     getEmail(): string {
//       return this.email;
//     }
//     setEmail(email: string): void {
//       this.email = email;
//     }
//     getAddress(): string {
//       return this.address;
//     }
//     setAddress(address: string): void {
//       this.address = address;
//     }
//   }
//   class Ebook extends Book {
//     format: string;
//     constructor(title: string, author: string, genre: string, price: number, format: string) {
//       super(title, author, genre, price);
//       this.format = format;
//     }
//     getFormat(): string {
//         return this.format;
//       }
//     setFormat(newFormat: string) {
//         this.format = newFormat;
//       }
//       displayDetails(): void {
//         super.displayDetails(); // Call the base class displayDetails method
//         console.log(`Format: ${this.format}`);
//       }
//   }
// // const myBook = new Ebook("The Catcher in the Rye", "J.D. Salinger", "Fiction", 19.99, "PDF");
// // myBook.displayDetails()
// abstract class Payment {
//      processPayment(amount: number) {}
//   }
//   class CreditCardPayment extends Payment {
//     constructor(public cardNumber: string, public cvv: number, public expiryDate: string) {
//       super();
//     }
//     processPayment(amount: number) {
//       console.log(`Processing payment of ${amount} using credit card: ${this.cardNumber.slice(-4)}...`);
//       // Simulate payment processing
//       console.log('Payment successful!');
//     }
//   }
//   class PayPalPayment extends Payment {
//     constructor(public email: string, public password: string) {
//       super();
//       this.email = email;
//       this.password = password;
//     }
//     processPayment(amount: number) {
//       console.log(`Processing payment of ${amount} using PayPal account: ${this.email}...`);
//       // Simulate payment processing
//       console.log('Payment successful!');
//     }
//   }
// // const creditCardPayment = new CreditCardPayment("1234-5678-9012-3456", 123 , "12/24");
// // const payPalPayment = new PayPalPayment("example@example.com", '123');
// // creditCardPayment.processPayment(100);
// // payPalPayment.processPayment(200);
// interface ShoppingCart {
//     addBook(book: Book): void
//     removeBook(book: Book): void
//     viewCart(): Book[]
// }
// class UserShoppingCart implements ShoppingCart {
//     cart: Book[] = [];
//     addBook(book: Book): void {
//       this.cart.push(book);
//     }
//     removeBook(book: Book): void {
//       const index = this.cart.indexOf(book);
//       if (index !== -1) {
//         this.cart.splice(index, 1);
//       }
//     }
//     viewCart(): Book[] {
//       return this.cart;
//     }
//   }
// class Admin {
//     books: Book[] = [];
//     addBookToInventory(book: Book): void {
//       this.books.push(book);
//     }
//     updateBookInInventory(oldBook: Book, newBook: Book): void {
//       const index = this.books.indexOf(oldBook);
//       if (index !== -1) {
//         this.books[index] = newBook;
//       }
//     }
//     // Method to delete a book from the inventory
//     deleteBookFromInventory(book: Book): void {
//       const index = this.books.indexOf(book);
//       if (index !== -1) {
//         this.books.splice(index, 1);
//       }
//     }
//   }
const myBook = new Book_1.Book('Sample Book', 'John Doe', 'Fiction', 29.99);
myBook.displayDetails();
const myEbook = new Ebook_1.Ebook('Ebook Sample', 'Jane Doe', 'Non-Fiction', 19.99, 'PDF');
myEbook.displayDetails();
const user = new User_1.User('John Doe', 'john@example.com', '123 Main St');
const shoppingCart = new UserShoppingCart_1.default();
shoppingCart.addBook(myBook);
console.log('User\'s Shopping Cart:', shoppingCart.viewCart());
// Process payment with credit card
const creditCardPayment = new CreditCardPayment_1.CreditCardPayment("1234-5678-9012-3456", 123, "12/24");
creditCardPayment.processPayment(150);
// Admin manages book inventory
const admin = new Admin_1.default();
admin.addBookToInventory(myBook);
admin.addBookToInventory(myEbook);
admin.updateBookInInventory(myBook, new Book_1.Book('Updated Book', 'John Doe', 'Fiction', 39.99));
admin.deleteBookFromInventory(myEbook);
// View updated book inventory
console.log('Updated Book Inventory:', admin.books);
//# sourceMappingURL=app.js.map