import User from "./User.js";
import Order from "../services/Order.js";
import Cart from "../services/Cart.js";

class Customer extends User {
    constructor(name, email, userId) {
        super(name, email, userId);
        this.cart = new Cart(this);
    }

    placeOrder() {
        if (this.cart.items.length === 0) {
            console.log("No items in the cart to place an order.");
            return;
        }
        const order = new Order(this.cart);
        console.log(`Order placed with total value: ${order.totalPrice}`);
        this.cart.clearCart()
        return order;
    }
}
export default Customer;