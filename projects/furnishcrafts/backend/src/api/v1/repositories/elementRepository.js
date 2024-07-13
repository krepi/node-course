import {readData} from "../../../helpers/mockedDataHelper.js";

class ElementRepository {
    async getAllElements() {
        const data = await readData();
        return data.elements;
    }
    async getElementById(id) {
        const data = await readData();
        return data.elements.find(element => element.id === id);
    }
}

export default new ElementRepository();