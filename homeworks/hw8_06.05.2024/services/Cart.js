class Cart {
    constructor(user) {
        this.user = user;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    clearCart() {
        this.items = [];
        return `Cart has been cleared`;
    }
    showItems() {
        return this.items.map(item => `${item.getDescription()}`).join('\n');
    }
    cartInfo(){
        return `Cart details: Customer number: ${this.user.userId}, Item amount: ${this.items.length} items, Total: ${this.calculateTotal()}`;
    }
}

export default Cart;