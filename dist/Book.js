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
    get coverImage() {
        return this._coverImage;
    }
    set coverImage(value) {
        this._coverImage = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get rating() {
        return this._rating;
    }
    set rating(value) {
        this._rating = value;
    }
    constructor(title, author, genre, price, description, coverImage, rating) {
        this._coverImage = "";
        this._description = "";
        this._rating = 5;
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._price = price;
        this._description = description;
        this._rating = rating;
        this._coverImage = coverImage;
    }
    displayDetails() {
        console.log(`Title: ${this._title}`);
        console.log(`Author: ${this._author}`);
        console.log(`Genre: ${this._genre}`);
        console.log(`Price: $${this._price}`);
        console.log(`description: $${this._description}`);
        console.log(`coverImage: $${this._coverImage}`);
        console.log(`rating: $${this._rating}`);
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map