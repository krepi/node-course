import Publication from './Publication.js';

class Book extends Publication {
    constructor(title, author, price, availability) {
        super(title, price, availability);
        this.author = author;
    }

    getDescription() {
        return `${this.title}, author; ${this.author}, price: $${this.price}`;
    }
}

class SciFiBook extends Book {
    constructor(title, author, price, availability, universe) {
        super(title, author, price, availability);
        this.universe = universe;
    }

    getDescription() {
        return `${this.title}, author; ${this.author}, universe: ${this.universe}, price: $${this.price}`;
    }
}

class AdventureBook extends Book {
    constructor(title, author, price, availability, setting) {
        super(title, author, price, availability);
        this.setting = setting;
    }

    getDescription() {
        return `${this.title}, author; ${this.author}, price: $${this.price}`;
    }
}

export {Book, SciFiBook, AdventureBook};
