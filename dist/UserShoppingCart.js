"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserShoppingCart {
    constructor() {
        this.cart = [];
    }
    addBook(book) {
        this.cart.push(book);
    }
    removeBook(book) {
        const index = this.cart.indexOf(book);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }
    viewCart() {
        return this.cart;
    }
}
exports.default = UserShoppingCart;
//# sourceMappingURL=UserShoppingCart.js.map