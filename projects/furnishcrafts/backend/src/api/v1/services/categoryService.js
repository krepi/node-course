import categoryRepository from "../repositories/categoryRepository.js";

class CategoryService {
   async addCategory(category) {
       return await categoryRepository.addCategory(category);
   }

    async getAllCategories() {
       return await categoryRepository.getAllCategories();
    }


}
export default new CategoryService();