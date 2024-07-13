import express from 'express';
import ElementController from '../controllers/elementController.js';

const router = express.Router();
const elementController = new ElementController();


router.get('/:id', elementController.getElementById);
router.get('/', elementController.getAllElements);

export default router;