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

