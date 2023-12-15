import { Admin } from "./Admin";
import { Book } from "./Book";
import { CreditCardPayment } from "./CreditCardPayment";
import { Ebook } from "./Ebook";
import { User } from "./User";
import { UserShoppingCart } from "./UserShoppingCart";

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
  


