import express from 'express';
import ElementController from '../controllers/elementController.js';

const router = express.Router();
const elementController = new ElementController();


// router.get('/:id', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => elementController.getAllElements(req, res));

export default router;