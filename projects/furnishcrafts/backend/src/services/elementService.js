import elementRepository from "../repositories/elementRepository.js";

class ElementService {
    getAllElements() {
        return elementRepository.getAllElements();
    }
}

export default new ElementService();