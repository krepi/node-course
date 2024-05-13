import {v4 as uuidv4} from 'uuid';

class Order {
    constructor(cart) {
        this.orderId = uuidv4();
        this.user = cart.user;
        this.items = cart.items;
        this.totalPrice = cart.calculateTotal();
    }

    static createOrder(cart) {
        if (cart.items.length === 0) {
            console.log("dont make order with empty cart")
            return {error: "Cannot create an order with an empty cart."};
        }
        return new Order(cart);
    }

    getId() {
        return this.orderId;
    }
}

export default Order;