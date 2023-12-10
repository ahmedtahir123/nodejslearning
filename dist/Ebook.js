"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0;
const Book_1 = require("./Book");
class Ebook extends Book_1.Book {
    constructor(title, author, genre, price, format) {
        super(title, author, genre, price);
        this.format = format;
    }
    getFormat() {
        return this.format;
    }
    setFormat(newFormat) {
        this.format = newFormat;
    }
    displayDetails() {
        super.displayDetails(); // Call the base class displayDetails method
        console.log(`Format: ${this.format}`);
    }
}
exports.Ebook = Ebook;
//# sourceMappingURL=Ebook.js.map