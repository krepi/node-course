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
}

export default Cart;