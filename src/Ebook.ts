import { Book } from "./Book";

export class Ebook extends Book {
    format: string;
  
    constructor(title: string, author: string, genre: string, price: number, format: string) {
      super(title, author, genre, price);
      this.format = format;
    }

    getFormat(): string {
        return this.format;
      }
    
    setFormat(newFormat: string) {
        this.format = newFormat;
      }

      displayDetails(): void {
        super.displayDetails(); // Call the base class displayDetails method
        console.log(`Format: ${this.format}`);
      }
  }