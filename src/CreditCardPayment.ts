import { Payment } from "./Payment";

export class CreditCardPayment extends Payment {
    constructor(public cardNumber: string, public cvv: number, public expiryDate: string) {
      super();
    }
  
    processPayment(amount: number) {
      console.log(`Processing payment of ${amount} using credit card: ${this.cardNumber.slice(-4)}...`);
      // Simulate payment processing
      console.log('Payment successful!');
    }
  }