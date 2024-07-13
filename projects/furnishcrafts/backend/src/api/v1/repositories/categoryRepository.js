import {readData} from "../../../helpers/mockedDataHelper.js";

class CategoryRepository {

    async getAllCategories() {
        const data = await readData();
        return data.categories;
    }
}
export default new CategoryRepository();