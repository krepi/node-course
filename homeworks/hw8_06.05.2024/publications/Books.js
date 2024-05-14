import Publication from './Publication.js';

/**
 * Class representing a general book.
 * @extends Publication
 */
class Book extends Publication {
    /**
     * Create a book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     */
    constructor(title, author, price, availability) {
        super(title, price, availability);
        this.author = author;
    }

    /**
     * Get a description of the book.
     * @returns {string} Description including the title, author, and price.
     */
    getDescription() {
        return `${this.title}, author: ${this.author}, price: $${this.price}`;
    }
}

/**
 * Class representing a science fiction book.
 * @extends Book
 */
class SciFiBook extends Book {
    /**
     * Create a science fiction book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     * @param {string} universe - The universe the book pertains to.
     */
    constructor(title, author, price, availability, universe) {
        super(title, author, price, availability);
        this.universe = universe;
    }

    /**
     * Get a description of the science fiction book.
     * @returns {string} Description including the title, author, universe, and price.
     */
    getDescription() {
        return `${this.title}, author: ${this.author}, universe: ${this.universe}, price: $${this.price}`;
    }
}

/**
 * Class representing an adventure book.
 * @extends Book
 */
class AdventureBook extends Book {
    /**
     * Create an adventure book.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} price - The price of the book.
     * @param {boolean} availability - The availability of the book.
     * @param {string} setting - The setting of the adventure in the book.
     */
    constructor(title, author, price, availability, setting) {
        super(title, author, price, availability);
        this.setting = setting;
    }

    /**
     * Get a description of the adventure book.
     * @returns {string} Description including the title, author, setting, and price.
     */
    getDescription() {
        return `${this.title}, author: ${this.author}, setting: ${this.setting}, price: $${this.price}`;
    }
}

export {Book, SciFiBook, AdventureBook};

