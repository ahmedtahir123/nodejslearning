"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `);
});
app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳');
});
app.get('/about', (req, res) => {
    res.send('This is my about route..... ');
});
// Export the Express API
module.exports = app;
//# sourceMappingURL=app.js.map