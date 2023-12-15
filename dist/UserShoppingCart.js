"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShoppingCart = void 0;
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
exports.UserShoppingCart = UserShoppingCart;
//# sourceMappingURL=UserShoppingCart.js.map