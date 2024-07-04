import express from 'express';
import AuthController from '../controllers/authController.js';
import {authenticateToken} from "../middleware/authMiddleware.js";


const authController = new AuthController();

const router = express.Router();
router.post('/register',  authController.register);
router.post('/login', authController.login)


export default router;

