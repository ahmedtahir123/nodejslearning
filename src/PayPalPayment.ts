import { Payment } from "./Payment";

export class PayPalPayment extends Payment {
    constructor(public email: string, public password: string) {
      super();
      this.email = email;
      this.password = password;
    }
  
    processPayment(amount: number) {
      console.log(`Processing payment of ${amount} using PayPal account: ${this.email}...`);
      // Simulate payment processing
      console.log('Payment successful!');
    }
  }