import { Book } from "./Book";

export class Ebook extends Book {
    _format: string;
  
    constructor(title: string, author: string, genre: string, price: number, format: string) {
      super(title, author, genre, price);
      this._format = format;
    }

    get format(): string {
        return this._format;
      }
    
    set format(newFormat: string) {
        this._format = newFormat;
      }

      displayDetails(): void {
        super.displayDetails(); // Call the base class displayDetails method
        console.log(`Format: ${this.format}`);
      }
  }