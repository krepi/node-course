import categoryService from '../services/categoryService.js'

class CategoryController {


    getAllCategories = async ( req, res) => {
        try {
            const categories = await categoryService.getAllCategories();
            return res.status(200).json(categories);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}
export default CategoryController;