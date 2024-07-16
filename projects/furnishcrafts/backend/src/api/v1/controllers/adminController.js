import userService from "../services/userService.js";
import categoryService from "../services/categoryService.js";

class AdminController {
    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    getAllUsers = async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    /**
     * 
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    addCategory = async (req, res) => {
        try {
            const category = await categoryService.addCategory(req.body);
            res.status(200).send(category);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}
export default AdminController;