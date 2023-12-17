"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.cartItems = [];
    }
    addItem(item) {
        this.cartItems.push(item);
    }
    removeItem(item) {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    }
    calculateTotal() {
        return this.cartItems.reduce((total, item) => total + item.subtotal, 0);
    }
    displayCart() {
        this.cartItems.forEach((item) => {
            console.log(`Book: ${item.book.title}, Quantity: ${item.quantity}, Subtotal: $${item.subtotal}`);
        });
    }
}
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=ShoppingCart.js.map