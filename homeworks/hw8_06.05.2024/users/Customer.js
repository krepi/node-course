import User from "./User.js";
import Order from "../services/Order.js";
import Cart from "../services/Cart.js";

/**
 * Class representing a Customer.
 * @extends User
 */
class Customer extends User {
    /**
     * Create a Customer.
     * @param {string} name - The name of the customer.
     * @param {string} email - The email address of the customer.
     * @param {string} userId - The user ID of the customer.
     */
    constructor(name, email, userId) {
        super(name, email, userId);
        this.cart = new Cart(this); // Initializes a new shopping cart associated with the customer.
    }

    /**
     * Place an order using the items in the customer's cart. If the cart is empty, no order will be placed.
     * @returns {Order|undefined} The Order object created from the cart, or undefined if no order was placed.
     */
    placeOrder() {
        if (this.cart.items.length === 0) {
            console.log("No items in the cart to place an order.");
            return;
        }
        const order = new Order(this.cart);
        console.log(`Order placed with total value: ${order.totalPrice}`);
        this.cart.clearCart();
        return order;
    }
}

export default Customer;
