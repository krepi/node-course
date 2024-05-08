import {v4 as uuidv4} from 'uuid';

class Order {
    constructor(cart) {
        this.orderId = uuidv4();
        this.user = cart.user;
        this.items = cart.items;
        this.totalPrice = cart.calculateTotal();
    }
}

export default Order;
