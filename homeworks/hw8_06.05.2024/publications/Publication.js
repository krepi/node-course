/**
 * Represents a publication, which can be a book, magazine, or any other form of published work.
 */
class Publication {
    /**
     * Constructs a new Publication instance.
     * @param {string} title - The title of the publication.
     * @param {number} price - The price of the publication.
     * @param {boolean} availability - The availability status of the publication.
     */
    constructor(title, price, availability) {
        this.title = title;
        this.price = price;
        this.availability = availability;
    }

    /**
     * Updates the availability of the publication.
     * @param {boolean} newStatus - The new availability status of the publication.
     */
    updateAvailability(newStatus) {
        this.availability = newStatus;
    }

    /**
     * Returns a description of the publication.
     * @returns {string} A string that includes the title and price of the publication.
     */
    getDescription() {
        return `${this.title}, price: $${this.price}`;
    }
}

export default Publication;
