"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
const Payment_1 = require("./Payment");
class CreditCardPayment extends Payment_1.Payment {
    constructor(cardNumber, cvv, expiryDate) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using credit card: ${this.cardNumber.slice(-4)}...`);
        // Simulate payment processing
        console.log('Payment successful!');
    }
}
exports.CreditCardPayment = CreditCardPayment;
//# sourceMappingURL=CreditCardPayment.js.map