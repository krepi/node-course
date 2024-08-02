import projectService from '../services/projectService.js';

class ProjectController {
    /**
     * Get all projects for a user
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async getProjects(req, res) {
        try {
            const userId = req.user.id;
            const role = req.user.role;
            const projects = await projectService.getProjects(userId, role);
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    /**
     * Create a new project
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async createProject(req, res) {
        try {
            const userId = req.user.id;
            const projectData = { ...req.body, user_id: userId };
            const newProject = await projectService.createProject(projectData);
            res.status(201).json(newProject);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    /**
     * Get project details by ID
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async getProjectById(req, res) {
        try {
            const projectId = req.params.id;
            const project = await projectService.getProjectById(projectId);

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            const { totalCost, totalTime, outOfStock } = await projectService.calculateProjectCostAndTime(projectId);

            res.status(200).json({
                ...project,
                totalCost,
                totalTime,
                outOfStock
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    /**
     * Add element to project
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async addElementToProject(req, res) {
        try {
            const { projectId } = req.params;
            const { elementId, quantity } = req.body;
            const userId = req.user.id;
            const role = req.user.role;

            const project = await projectService.addElementToProject(projectId, elementId, quantity, userId, role);
            res.status(200).json(project);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    /**
     * Remove element from project
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async removeElementFromProject(req, res) {
        try {
            const { projectId, elementId } = req.params;
            const userId = req.user.id;
            const role = req.user.role;

            await projectService.removeElementFromProject(projectId, elementId, userId, role);
            res.status(200).json({ message: 'Element removed from project' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    /**
     * Close project and update stock
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @returns {Promise<void>}
     */
    async closeProject(req, res) {
        try {
            const { projectId } = req.params;
            const userId = req.user.id;
            const role = req.user.role;

            await projectService.closeProject(projectId, userId, role);
            res.status(200).json({ message: 'Project closed and stock updated' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default ProjectController;
