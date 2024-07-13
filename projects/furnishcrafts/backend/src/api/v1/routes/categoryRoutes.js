import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', categoryController.getAllCategories);

export default router;