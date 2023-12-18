import { Admin } from "./Admin";
import { Book } from "./Book";
import { CreditCardPayment } from "./CreditCardPayment";
import { Ebook } from "./Ebook";
import { BookGenre } from "./FrontEnd/Enums/BookGenre";
import { User } from "./User";
import { UserShoppingCart } from "./UserShoppingCart";

  const myBook = new Book('Sample Book', 'John Doe', BookGenre.Fiction, 100.99, "description", "URL", 5);
  myBook.displayDetails();

  const myEbook = new Ebook('Ebook Sample', 'Jane Doe', BookGenre.NonFiction, 19.99, 'PDF', "description", "URL", 5);

  myEbook.displayDetails();

  const user = new User('ahmed', 'ahmed@gmai.com', 'karachi', "username", "password" );

  const shoppingCart = new UserShoppingCart();
  shoppingCart.addBook(myBook);

  console.log('User\'s Shopping Cart:', shoppingCart.viewCart());

  const creditCardPayment = new CreditCardPayment("1234-5678-9012-3456", 123 , "12/24", 150);
  creditCardPayment.processPayment();

  const admin = new Admin();
  admin.addBookToInventory(myBook);
  admin.addBookToInventory(myEbook);
  admin.updateBookInInventory(myBook, new Book('Updated Book', 'John Doe', BookGenre.NonFiction, 39.99, "description", "URL", 5));
  admin.deleteBookFromInventory(myEbook);

  console.log('Updated Book Inventory:', admin.books);
  


