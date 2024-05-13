import Publication from './Publication.js';

class Magazine extends Publication {
    constructor(title, issueNumber, price, availability) {
        super(title, price, availability);
        this.issueNumber = issueNumber;

    }
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber} price: $${this.price}`;
    }
}

class SportsMagazine extends Magazine {
    constructor(title, issueNumber, price, availability, sportsType) {
        super(title, issueNumber, price, availability);
        this.sportsType = sportsType;
    }
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber} , sport: ${this.sportsType}, price: $${this.price}`;
    }
}

class FashionMagazine extends Magazine {
    constructor(title, issueNumber, price, availability, trends) {
        super(title, issueNumber, price, availability);
        this.trends = trends;
    }
    getDescription() {
        return `${this.title}, issue number: ${this.issueNumber}, trend: ${this.trends}, price: $${this.price}`;
    }
}

export {Magazine, SportsMagazine, FashionMagazine};
