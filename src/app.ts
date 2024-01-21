import express from 'express';
import {DataSource} from 'typeorm'

const app = express();
const port = 3000;


const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "book_store_new",
  entities: [],
  synchronize: true,
  logging: false,
});

dataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});