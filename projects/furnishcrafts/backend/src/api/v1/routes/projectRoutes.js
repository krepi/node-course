import express from 'express';
import ProjectController from '../controllers/projectController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();
const projectController = new ProjectController();

/**
 * @route GET /api/v1/projects
 * @desc Get all projects for a user
 * @access Private
 */
router.get('/', authenticateToken, projectController.getProjects);

/**
 * @route POST /api/v1/projects
 * @desc Create a new project
 * @access Private
 */
router.post('/', authenticateToken, projectController.createProject);

/**
 * @route GET /api/v1/projects/:id
 * @desc Get project details by ID
 * @access Private
 */
router.get('/:id', authenticateToken, projectController.getProjectById);

export default router;
