import elementRepository from "../repositories/elementRepository.js";

class ElementService {
    /**
     * Method to fetch all elements
     * @returns {Promise<*>}
     */
    async getAllElements() {
        return await elementRepository.getAllElements();
    }

    /**
     * Method to fetch element by its ID
     * @param id id of element stored in DB
     * @returns {Promise<*>}
     */
    async getElementById(id) {
        return await elementRepository.getElementById(id)
    }
}

export default new ElementService();