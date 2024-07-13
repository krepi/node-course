import userService from "../services/userService.js";

class AdminController {

    getAllUsers = async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }


}
export default AdminController;