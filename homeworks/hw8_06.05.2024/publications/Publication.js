class Publication {
    constructor(title, price, availability) {
        this.title = title;
        this.price = price;
        this.availability = availability;
    }

    updateAvailability(newStatus) {
        this.availability = newStatus;
    }

    getDescription() {
        return `${this.title}, price: $${this.price}`;
    }
}

export default Publication;