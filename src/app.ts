class Book {

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


// const myBook = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 19.99);

// console.log("Title:", myBook.getTitle());
// console.log("Author:", myBook.getAuthor());
// console.log("Genre:", myBook.getGenre());
// console.log("Price:", myBook.getPrice());

// myBook.setTitle("New Title");
// myBook.setAuthor("New Author");
// myBook.setGenre("New Genre");
// myBook.setPrice(29.99);

// console.log("Updated Title:", myBook.getTitle());
// console.log("Updated Author:", myBook.getAuthor());
// console.log("Updated Genre:", myBook.getGenre());
// console.log("Updated Price:", myBook.getPrice());

// myBook.displayDetails()


class User {

    constructor(public name: string, public email: string,  public address: string) {}
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  }


  class Ebook extends Book {
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
        super.displayDetails(); 
        console.log(`Format: ${this.format}`);
      }
  }

// const myBook = new Ebook("The Catcher in the Rye", "J.D. Salinger", "Fiction", 19.99, "PDF");

// myBook.displayDetails()


abstract class Payment {
   
     processPayment(amount: number) {}
  }


  class CreditCardPayment extends Payment {
    constructor(public cardNumber: string, public cvv: number, public expiryDate: string) {
      super();
    }
  
    processPayment(amount: number) {
      console.log(`Processing payment of ${amount} using credit card: ${this.cardNumber.slice(-4)}...`);
      console.log('Payment successful!');
    }
  }
  
  class PayPalPayment extends Payment {
    constructor(public email: string, public password: string) {
      super();
      this.email = email;
      this.password = password;
    }
  
    processPayment(amount: number) {
      console.log(`Processing payment of ${amount} using PayPal account: ${this.email}...`);
      console.log('Payment successful!');
    }
  }

// const creditCardPayment = new CreditCardPayment("1234-5678-9012-3456", 123 , "12/24");
// const payPalPayment = new PayPalPayment("example@example.com", '123');

// creditCardPayment.processPayment(100);
// payPalPayment.processPayment(200);

interface ShoppingCart {
    addBook(book: Book): void
    removeBook(book: Book): void
    viewCart(): Book[]
}

class UserShoppingCart implements ShoppingCart {
    cart: Book[] = [];
  
    addBook(book: Book): void {
      this.cart.push(book);
    }
  
    removeBook(book: Book): void {
      const index = this.cart.indexOf(book);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  
    viewCart(): Book[] {
      return this.cart;
    }
  }


  class Admin {
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
  
    deleteBookFromInventory(book: Book): void {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
  }


  const myBook = new Book('Sample Book', 'John Doe', 'Fiction', 100.99);

myBook.displayDetails();

const myEbook = new Ebook('Ebook Sample', 'Jane Doe', 'Non-Fiction', 19.99, 'PDF');

myEbook.displayDetails();

const user = new User('ahmed', 'ahmed@gmai.com', 'karachi');

const shoppingCart = new UserShoppingCart();
shoppingCart.addBook(myBook);

console.log('User\'s Shopping Cart:', shoppingCart.viewCart());

const creditCardPayment = new CreditCardPayment("1234-5678-9012-3456", 123 , "12/24");
creditCardPayment.processPayment(150);

const admin = new Admin();
admin.addBookToInventory(myBook);
admin.addBookToInventory(myEbook);
admin.updateBookInInventory(myBook, new Book('Updated Book', 'John Doe', 'Fiction', 39.99));
admin.deleteBookFromInventory(myEbook);

console.log('Updated Book Inventory:', admin.books);
  


