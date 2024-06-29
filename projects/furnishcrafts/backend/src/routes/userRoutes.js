import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();
const userController = new UserController();

router.post('/register', userController.register);
router.get('/', (req, res) => userController.getAllUsers(req, res));

export default router;
