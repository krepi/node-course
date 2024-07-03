import express from 'express';
import UserController from '../controllers/userController.js';


const userController = new UserController();

const router = express.Router();
router.post('/register', userController.register);
router.get('/login', userController.login)


export default router;

