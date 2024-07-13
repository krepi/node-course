import categoryRepository from "../repositories/categoryRepository.js";

class CategoryService {
    async getAllCategories() {
       return await categoryRepository.getAllCategories();
    }
}
export default new CategoryService();