import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();
const userController = new UserController();

router.post('/register', (req, res) => userController.register(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => userController.getAllUsers(req, res));

export default router;
