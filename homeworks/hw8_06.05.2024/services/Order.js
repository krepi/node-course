import {v4 as uuidv4} from 'uuid';

/**
 * Class representing an order.
 */
class Order {
    /**
     * Create an Order instance.
     * @param {Cart} cart - The cart from which to create an order. The cart should have items, a user, and be able to calculate total.
     */
    constructor(cart) {
        this.orderId = uuidv4(); // Universally unique identifier for the order
        this.user = cart.user; // User who created the order
        this.items = cart.items; // Items from the cart
        this.totalPrice = cart.calculateTotal(); // Total price of the cart
        this.status = 'Pending'; // Initial status of the order
    }

    /**
     * Creates a new Order if the cart is not empty.
     * @param {Cart} cart - The cart from which to create an order.
     * @returns {Order|Object} Returns the Order instance or an error object if the cart is empty.
     */
    static createOrder(cart) {
        if (cart.items.length === 0) {
            console.log("Don't make order with empty cart");
            return {error: "Cannot create an order with an empty cart."};
        }
        return new Order(cart);
    }

    /**
     * Gets the order ID.
     * @returns {string} The order's unique identifier.
     */
    getId() {
        return this.orderId;
    }

    /**
     * Updates the status of the order.
     * @param {string} newStatus - The new status to set for the order.
     */
    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order status updated to ${newStatus}`);
    }
}

export default Order;

