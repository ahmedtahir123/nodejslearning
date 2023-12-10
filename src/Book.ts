
export class Book {

    constructor(private title: string, private author: string, private genre: string, private price: number) { }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    getGenre(): string {
        return this.genre;
    }

    setGenre(genre: string): void {
        this.genre = genre;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    displayDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
      }
}