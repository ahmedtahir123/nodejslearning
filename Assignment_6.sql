USE book_store;

CREATE TABLE `book_store`.`books` (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity_available INT NOT NULL
);

CREATE TABLE `book_store`.`users` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE `book_store`.`shopping_carts` (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE `book_store`.`cart_items` (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES shopping_carts(cart_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

CREATE TABLE `book_store`.`orders` (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE `book_store`.`order_items` (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);


INSERT INTO `book_store`.`books` (title, author, price, quantity_available) VALUES
('The Lost History', 'Jane Doe', 19.99, 15),
('Space and Beyond', 'John Smith', 25.50, 10),
('Deep Sea Dreams', 'Clara Bell', 18.00, 20),
('Mountains: The Silent Giants', 'Rick Taggart', 21.95, 5),
('Coding for Beginners', 'Laura Byte', 29.99, 30),
('Gardening 101', 'Fiona Green', 15.99, 25),
('Mysteries of the Ancient World', 'Victor Time', 17.50, 10),
('Culinary Delights', 'Chef Ramsey Hill', 27.00, 12),
('The Art of Photography', 'Susan Lens', 30.00, 8),
('Poetry of the 20th Century', 'Liam Wordsworth', 16.00, 18);


INSERT INTO `book_store`.`users` (name, email, address) VALUES
('Alice Johnson', 'alice.johnson@email.com', '123 Maple Street, Anytown, USA'),
('Bob Smith', 'bob.smith@email.com', '456 Oak Road, Somewhere, USA'),
('Carol White', 'carol.white@email.com', '789 Pine Lane, Thiscity, USA'),
('David Brown', 'david.brown@email.com', '159 Elm Drive, Thatcity, USA'),
('Emma Davis', 'emma.davis@email.com', '246 Alder Way, Anycity, USA'),
('Frank Moore', 'frank.moore@email.com', '753 Spruce Street, Othercity, USA'),
('Grace Lee', 'grace.lee@email.com', '951 Cedar Place, Smalltown, USA'),
('Henry Wilson', 'henry.wilson@email.com', '852 Willow Avenue, Bigcity, USA'),
('Ivy Taylor', 'ivy.taylor@email.com', '654 Redwood Blvd, Newcity, USA'),
('Jack Miller', 'jack.miller@email.com', '321 Birch Street, Oldtown, USA');


INSERT INTO `book_store`.`shopping_carts` (user_id) VALUES
(1),  -- Shopping cart for user with user_id 1
(2),  -- Shopping cart for user with user_id 2
(3),  -- Shopping cart for user with user_id 3
(4),  -- Shopping cart for user with user_id 4
(5),  -- Shopping cart for user with user_id 5
(6),  -- Shopping cart for user with user_id 6
(7),  -- Shopping cart for user with user_id 7
(8),  -- Shopping cart for user with user_id 8
(9),  -- Shopping cart for user with user_id 9
(10); -- Shopping cart for user with user_id 10


INSERT INTO `book_store`.`cart_items` (cart_id, book_id, quantity, price) VALUES
(1, 1, 2, 19.99),  -- 2 copies of book 1 in cart 1
(1, 2, 1, 25.50),  -- 1 copy of book 2 in cart 1
(2, 3, 1, 18.00),  -- 1 copy of book 3 in cart 2
(2, 4, 1, 21.95),  -- 1 copy of book 4 in cart 2
(3, 5, 2, 29.99),  -- 2 copies of book 5 in cart 3
(4, 6, 1, 15.99),  -- 1 copy of book 6 in cart 4
(5, 7, 1, 17.50),  -- 1 copy of book 7 in cart 5
(6, 8, 1, 27.00),  -- 1 copy of book 8 in cart 6
(7, 9, 1, 30.00),  -- 1 copy of book 9 in cart 7
(8, 10, 2, 16.00); -- 2 copies of book 10 in cart 8


INSERT INTO `book_store`.`orders` (user_id, order_date, total_amount) VALUES
(1, '2024-01-03', 39.98),   -- Order by user 1
(2, '2024-01-04', 25.50),   -- Order by user 2
(3, '2024-01-05', 18.00),   -- Order by user 3
(4, '2024-01-06', 21.95),   -- Order by user 4
(5, '2024-01-07', 59.98),   -- Order by user 5
(6, '2024-01-08', 15.99),   -- Order by user 6
(7, '2024-01-09', 17.50),   -- Order by user 7
(8, '2024-01-10', 27.00),   -- Order by user 8
(9, '2024-01-11', 30.00),   -- Order by user 9
(10, '2024-01-12', 32.00);  -- Order by user 10


INSERT INTO `book_store`.`order_items` (order_id, book_id, quantity, price) VALUES
(1, 1, 2, 19.99),   -- 2 copies of book 1 in order 1
(1, 2, 1, 25.50),   -- 1 copy of book 2 in order 1
(2, 3, 1, 18.00),   -- 1 copy of book 3 in order 2
(2, 4, 1, 21.95),   -- 1 copy of book 4 in order 2
(3, 5, 2, 29.99),   -- 2 copies of book 5 in order 3
(4, 6, 1, 15.99),   -- 1 copy of book 6 in order 4
(5, 7, 1, 17.50),   -- 1 copy of book 7 in order 5
(6, 8, 1, 27.00),   -- 1 copy of book 8 in order 6
(7, 9, 1, 30.00),   -- 1 copy of book 9 in order 7
(8, 10, 2, 16.00);  -- 2 copies of book 10 in order 8


SELECT * FROM `book_store`.`books`;
SELECT * FROM `book_store`.`books` WHERE book_id = 8;
SELECT * FROM `book_store`.`users`; 
SELECT * FROM `book_store`.`users`  WHERE user_id  = 9;
SELECT * FROM `book_store`.`shopping_carts` WHERE user_id = 4;  
INSERT INTO `book_store`.`cart_items` (cart_id, book_id, quantity, price)
VALUES (2, 5, 1, 25.50 );
SELECT * FROM `book_store`.`cart_items`

