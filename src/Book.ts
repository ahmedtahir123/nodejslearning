
export class Book {

    private _title: string;
    private _author: string;
    private _genre: string;
    private _price: number;
      
    get title(): string {
      return this._title;
    }
  
    set title(value: string) {
      this._title = value;
    }
  
    get author(): string {
      return this._author;
    }
  
    set author(value: string) {
        this._author = value;
    }
  
    get genre(): string {
      return this._genre;
    }
      
    set genre(value: string) {
      this._genre = value;
    }
       
    get price(): number {
        return this._price;
      }
       
    set price(value: number) {
        this._price = value;
      }
  
      constructor( title: string,  author: string,  genre: string,  price: number) { 
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._price = price;
      }
  
      
  
      displayDetails(): void {
          console.log(`Title: ${this.title}`);
          console.log(`Author: ${this.author}`);
          console.log(`Genre: ${this.genre}`);
          console.log(`Price: $${this.price}`);
        }
  }