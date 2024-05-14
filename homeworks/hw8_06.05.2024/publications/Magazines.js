import Publication from './Publication.js';

/**
 * Class representing a general magazine.
 * @extends Publication
 */
class Magazine extends Publication {
    /**
     * Create a magazine.
     * @param {string} title - The title of the magazine.
     * @param {number} issueNumber - The issue number of the magazine.
     * @param {number} price - The price of the magazine.
     * @param {boolean} availability - The availability of the magazine.
     */
    constructor(title, issueNumber, price, availability) {
        super(title, price, availability);
        this.issueNumber = issueNumber;
    }

    /**
     * Get a description of the magazine.
     * @returns {string} Description including the title, issue number, and price.
     */
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber}, price: $${this.price}`;
    }
}

/**
 * Class representing a sports magazine.
 * @extends Magazine
 */
class SportsMagazine extends Magazine {
    /**
     * Create a sports magazine.
     * @param {string} title - The title of the magazine.
     * @param {number} issueNumber - The issue number of the magazine.
     * @param {number} price - The price of the magazine.
     * @param {boolean} availability - The availability of the magazine.
     * @param {string} sportsType - The type of sports covered by the magazine.
     */
    constructor(title, issueNumber, price, availability, sportsType) {
        super(title, issueNumber, price, availability);
        this.sportsType = sportsType;
    }

    /**
     * Get a description of the sports magazine.
     * @returns {string} Description including the title, issue number, sports type, and price.
     */
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber}, sport: ${this.sportsType}, price: $${this.price}`;
    }
}

/**
 * Class representing a fashion magazine.
 * @extends Magazine
 */
class FashionMagazine extends Magazine {
    /**
     * Create a fashion magazine.
     * @param {string} title - The title of the magazine.
     * @param {number} issueNumber - The issue number of the magazine.
     * @param {number} price - The price of the magazine.
     * @param {boolean} availability - The availability of the magazine.
     * @param {string} trends - The fashion trends featured in this issue.
     */
    constructor(title, issueNumber, price, availability, trends) {
        super(title, issueNumber, price, availability);
        this.trends = trends;
    }

    /**
     * Get a description of the fashion magazine.
     * @returns {string} Description including the title, issue number, trends, and price.
     */
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber}, trend: ${this.trends}, price: $${this.price}`;
    }
}

export {Magazine, SportsMagazine, FashionMagazine};
