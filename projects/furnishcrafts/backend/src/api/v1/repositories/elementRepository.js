import {query} from "../../../config/configDB.js";

class ElementRepository {
    async getAllElements() {
        const data = await query("SELECT * FROM elements");
        return data.rows;
    }
    async getElementById(id) {


    }
}

export default new ElementRepository();