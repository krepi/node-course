import elementRepository from "../repositories/elementRepository.js";

class ElementService {
    /**
     * 
     * @returns {Promise<*>}
     */
    async getAllElements() {
        return await elementRepository.getAllElements();
    }

    /**
     *
     * @param id id of element stored in DB
     * @returns {Promise<*>}
     */
    async getElementById(id) {
        return await elementRepository.getElementById(id)
    }
}

export default new ElementService();