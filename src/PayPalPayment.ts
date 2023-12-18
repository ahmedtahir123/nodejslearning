import { Payment } from "./Payment";

export class PayPalPayment extends Payment {
    constructor(public email: string, public password: string,public amount: number) {
      super();
      this.email = email;
      this.password = password;
    }
  
    processPayment() {
      console.log(`Processing payment of ${this.amount} using PayPal account: ${this.email}...`);
      // Simulate payment processing
      console.log('Payment successful!');
    }
  }