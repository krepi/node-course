import {query} from "../../../config/configDB.js";

class ElementRepository {
    async getAllElements() {
        const data = await query("SELECT * FROM elements");
        return data.rows;
    }
    async getElementById(id) {
            const data = await query("SELECT * FROM elements WHERE id = $1", [id]);
            return data.rows;
    }
}

export default new ElementRepository();