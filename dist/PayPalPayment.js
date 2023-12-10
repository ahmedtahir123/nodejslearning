"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
const Payment_1 = require("./Payment");
class PayPalPayment extends Payment_1.Payment {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
        this.email = email;
        this.password = password;
    }
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using PayPal account: ${this.email}...`);
        // Simulate payment processing
        console.log('Payment successful!');
    }
}
exports.PayPalPayment = PayPalPayment;
//# sourceMappingURL=PayPalPayment.js.map