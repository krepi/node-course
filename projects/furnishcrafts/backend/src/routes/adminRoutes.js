import express from "express";
import AdminController from "../controllers/adminController.js";
import {authenticateToken, authorizeRole} from "../middleware/authMiddleware.js";

const router = express.Router();
const adminController = new AdminController();

router.get('/users', authenticateToken, authorizeRole('admin'), adminController.getAllUsers)

export default router;