"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor() {
        this.books = [];
    }
    addBookToInventory(book) {
        this.books.push(book);
    }
    updateBookInInventory(oldBook, newBook) {
        const index = this.books.indexOf(oldBook);
        if (index !== -1) {
            this.books[index] = newBook;
        }
    }
    // Method to delete a book from the inventory
    deleteBookFromInventory(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
}
exports.default = Admin;
//# sourceMappingURL=Admin.js.map