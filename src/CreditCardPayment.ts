import { Payment } from "./Payment";

export class CreditCardPayment extends Payment {
    constructor(private cardNumber: string, private cvv: number, private expiryDate: string, private amount: number) {
      super();
    }
  
    processPayment() {
      console.log(`Processing payment of ${this.amount} using credit card: ${this.cardNumber.slice(-4)}...`);
      // Simulate payment processing
      console.log('Payment successful!');
    }
  }