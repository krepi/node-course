class Cart {
    constructor(user) {
        this.user = user;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item.getDescription()} to the cart.`);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        console.log(`Item with id ${itemId} removed from the cart.`);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    clearCart() {
        this.items = [];
        console.log("Cart has been cleared.");
    }

    showItems() {
        return this.items.map(item => `${item.getDescription()}`).join('\n');
    }

    cartInfo() {
        return `Cart details: Customer ID: ${this.user.userId}, Item count: ${this.items.length}, Total: $${this.calculateTotal()}`;
    }
}


export default Cart;