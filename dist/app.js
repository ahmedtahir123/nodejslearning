"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Book_1 = require("./Entities/Book");
const Order_1 = require("./Entities/Order");
const OrderItem_1 = require("./Entities/OrderItem");
const ShoppingCart_1 = require("./Entities/ShoppingCart");
const User_1 = require("./Entities/User");
const book_1 = __importDefault(require("./Services/book"));
const app = (0, express_1.default)();
const port = 3000;
const dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "book_store_new",
    entities: [Book_1.books, Order_1.orders, OrderItem_1.OrderItem, ShoppingCart_1.ShoppingCart, User_1.users],
    synchronize: true,
    logging: true,
});
dataSource.initialize()
    .then(() => {
    console.log("Entities initailize");
})
    .catch((error) => console.log(error));
app.use(express_1.default.json());
app.use('/api', book_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map