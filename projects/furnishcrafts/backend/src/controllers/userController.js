import userService from '../services/userService.js';

class UserController {
    async register(req, res) {
        try {
            const {name, email, password, role} = req.body;
            const newUser = userService.createUser({name, email, password, role});
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getUserById(req, res) {
        try {
            const {id} = req.params;
            const user = userService.getUserById(parseInt(id, 10));
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

export default UserController;

