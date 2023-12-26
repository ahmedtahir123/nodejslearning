import { TicketManager } from "./TicketManager";

export class Invoice {
    constructor(ticketManager: TicketManager) {
        ticketManager.on('buy', this.onTicketBought);
    }

    onTicketBought(email: string, price: number, timestamp: number) {
        console.log(`Invoice: Ticket bought by ${email}. Price: $${price}. Time: ${timestamp}`);
    }
}