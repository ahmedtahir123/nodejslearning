import "reflect-metadata"
import express from 'express';
import {DataSource} from 'typeorm'
import { books } from './Entities/Book';
import { orders } from './Entities/Order';
import { OrderItem } from './Entities/OrderItem';
import { ShoppingCart } from './Entities/ShoppingCart';
import { users } from './Entities/User';
import book  from '../src/Entities/Services/book';

const app = express();
const port = 3000;

const dataSource = new DataSource({
  type: "mysql",
  host: "book_store",
  port: 3306,
  username: "root",
  password: "root",
  database: "book_store_new",
  entities: [books, orders, OrderItem, ShoppingCart, users],
  synchronize: true,
  logging: true,
});

dataSource.initialize()
    .then(() => {
        console.log("Entities initailize")
    })
    .catch((error) => console.log(error))

app.use(express.json());
app.use('/api', book);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});