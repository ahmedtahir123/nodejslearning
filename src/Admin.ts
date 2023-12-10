import { Book } from "./Book";

export class Admin {
    books: Book[] = [];
  
    addBookToInventory(book: Book): void {
      this.books.push(book);
    }
  
    updateBookInInventory(oldBook: Book, newBook: Book): void {
      const index = this.books.indexOf(oldBook);
      if (index !== -1) {
        this.books[index] = newBook;
      }
    }
  
    // Method to delete a book from the inventory
    deleteBookFromInventory(book: Book): void {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
  }