"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get genre() {
        return this._genre;
    }
    set genre(value) {
        this._genre = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    constructor(title, author, genre, price) {
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._price = price;
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