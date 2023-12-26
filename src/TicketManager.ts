
import EventEmitter from 'events';

export class TicketManager extends EventEmitter {
    constructor() {
        super();
    }

    buy(email: string, price: number) {
        const timestamp = new Date();
        this.emit('buy', email, price, timestamp);
    }
}
