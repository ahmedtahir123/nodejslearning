"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, genre, price) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    getGenre() {
        return this.genre;
    }
    setGenre(genre) {
        this.genre = genre;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map