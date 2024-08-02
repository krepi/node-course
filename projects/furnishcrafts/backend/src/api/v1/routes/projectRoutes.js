import express from 'express';
import ProjectController from '../controllers/projectController.js';
import { authenticateToken, authorizeRole } from '../middleware/authMiddleware.js';

const router = express.Router();
const projectController = new ProjectController();

router.get('/', authenticateToken, projectController.getProjects);

router.get('/all', authenticateToken, authorizeRole('administrator'), projectController.getAllProjects);


router.post('/', authenticateToken, projectController.createProject);

export default router;
