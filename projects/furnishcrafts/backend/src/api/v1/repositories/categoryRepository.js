import {readData} from "../../../helpers/mockedDataHelper.js";
import {query} from "../../../config/configDB.js";

class CategoryRepository {

    /**
     *
     * @param category
     * @returns {Promise<*>}
     */
    async addCategory(category) {
        const {category_name} = category;
        const result = await query("INSERT INTO element_categories (category_name) VALUES ($1) RETURNING *", [category_name]);
        return result.rows[0];
    }

    /**
     *
     * @returns {Promise<*>}
     */
    async getAllCategories() {
        const data = await query("SELECT * FROM element_categories");
        return data.rows;
    }


}
export default new CategoryRepository();