import Publication from './Publication.js';

class Magazine extends Publication {
    constructor(title, issueNumber, price, availability) {
        super(title, price, availability);
        this.issueNumber = issueNumber;
    }
}

class SportsMagazine extends Magazine {
    constructor(title, issueNumber, price, availability, sportsType) {
        super(title, issueNumber, price, availability);
        this.sportsType = sportsType;
    }
}

class FashionMagazine extends Magazine {
    constructor(title, issueNumber, price, availability, trends) {
        super(title, issueNumber, price, availability);
        this.trends = trends;
    }
}

export {Magazine, SportsMagazine, FashionMagazine};
