import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', categoryController.getAllCategories);

export default router;