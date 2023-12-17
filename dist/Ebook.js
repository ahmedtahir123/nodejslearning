"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0;
const Book_1 = require("./Book");
class Ebook extends Book_1.Book {
    constructor(title, author, genre, price, format, desc, coverImage, rating) {
        super(title, author, genre, price, desc, coverImage, rating);
        this._format = format;
    }
    get format() {
        return this._format;
    }
    set format(newFormat) {
        this._format = newFormat;
    }
    displayDetails() {
        super.displayDetails(); // Call the base class displayDetails method
        console.log(`Format: ${this.format}`);
    }
}
exports.Ebook = Ebook;
//# sourceMappingURL=Ebook.js.map