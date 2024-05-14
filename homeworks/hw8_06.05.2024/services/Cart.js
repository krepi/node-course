/**
 * Class representing a shopping cart.
 */
class Cart {
    /**
     * Create a Cart instance.
     * @param {User} user - The user to whom the cart belongs.
     */
    constructor(user) {
        this.user = user;
        this.items = [];
    }

    /**
     * Add an item to the cart.
     * @param {Object} item - The item to add to the cart. Must have a `getDescription()` method and `price` property.
     */
    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item.getDescription()} to the cart.`);
    }

    /**
     * Remove an item from the cart by its ID.
     * @param {number} itemId - The ID of the item to remove from the cart.
     */
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        console.log(`Item with id ${itemId} removed from the cart.`);
    }

    /**
     * Calculate the total price of all items in the cart.
     * @returns {number} The total price of all items.
     */
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    /**
     * Clears all items from the cart.
     */
    clearCart() {
        this.items = [];
        console.log("Cart has been cleared.");
    }

    /**
     * Show all items in the cart.
     * @returns {string} A string representation of all items in the cart.
     */
    showItems() {
        return this.items.map(item => `${item.getDescription()}`).join('\n');
    }

    /**
     * Provides detailed information about the cart.
     * @returns {string} Details of the cart including the user ID, count of items, and total price.
     */
    cartInfo() {
        return `Cart details: Customer ID: ${this.user.userId}, Item count: ${this.items.length}, Total: $${this.calculateTotal()}`;
    }
}

export default Cart;
