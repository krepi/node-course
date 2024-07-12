import express from 'express';
import UserController from '../controllers/userController.js';
import {authenticateToken} from "../middleware/authMiddleware.js";


const router = express.Router();
const userController = new UserController();


router.get('/:id',authenticateToken, userController.getUserById);


export default router;

