
export class Book {

    private _title: string;
    private _author: string;
    private _genre: string;
    private _price: number;
    private _coverImage = "";
    private _description = "";
    private _rating = 5;
      
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
  
      constructor( title: string,  author: string,  genre: string,  price: number, description: string, coverImage: string, rating: number ) { 
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._price = price;
        this._description = description;
        this._rating = rating;
        this._coverImage = coverImage;
      }
  
      displayDetails(): void {
          console.log(`Title: ${this._title}`);
          console.log(`Author: ${this._author}`);
          console.log(`Genre: ${this._genre}`);
          console.log(`Price: $${this._price}`);
          console.log(`description: $${this._description}`);
          console.log(`coverImage: $${this._coverImage}`);
          console.log(`rating: $${this._rating}`);
        }
  }