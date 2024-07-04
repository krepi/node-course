import userService from '../services/userService.js';

class UserController {

    getUserById = async (req, res) => {
        try {
            const {id} = req.params;
            const user = await userService.getUserById(parseInt(id, 10));
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

export default UserController;

