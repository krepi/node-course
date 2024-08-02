import projectRepository from '../repositories/projectRepository.js';
import elementService from '../services/elementService.js';

class ProjectService {
    /**
     * Get all projects
     * @returns {Promise<Array>}
     */
    async getAllProjects() {
        return await projectRepository.getAllProjects();
    }

    /**
     * Get projects for a user or all projects for an admin
     * @param {number} userId - User ID
     * @param {string} role - User role
     * @returns {Promise<Array>}
     */
    async getProjects(userId, role) {
        if (role === 'administrator') {
            return await this.getAllProjects();
        } else {
            return await projectRepository.getProjectsByUserId(userId);
        }
    }

    /**
     * Get project details by ID
     * @param {number} projectId - Project ID
     * @returns {Promise<Object>}
     */
    async getProjectById(projectId) {
        return await projectRepository.getProjectById(projectId);
    }

    /**
     * Create a new project
     * @param {Object} projectData - Project data
     * @returns {Promise<Object>}
     */
    async createProject(projectData) {
        return await projectRepository.createProject(projectData);
    }

    /**
     * Calculate project cost and time
     * @param {number} projectId - Project ID
     * @returns {Promise<Object>}
     */
    async calculateProjectCostAndTime(projectId) {
        const projectElements = await projectRepository.getProjectElements(projectId);
        const elementIds = projectElements.map(pe => pe.element_id);

        const elements = await elementService.getElementsByIds(elementIds);

        let totalCost = 0;
        let totalTime = 0;
        let outOfStock = [];

        projectElements.forEach(pe => {
            const element = elements.find(e => e.id === pe.element_id);
            if (element.stock_amount < pe.quantity) {
                outOfStock.push({ elementId: pe.element_id, available: element.stock_amount });
            }
            totalCost += (element.price + element.installation_cost) * pe.quantity;
            totalTime += element.installation_time * pe.quantity;
        });

        return { totalCost, totalTime, outOfStock };
    }

    /**
     * Update project stock
     * @param {number} projectId - Project ID
     * @returns {Promise<void>}
     */
    async updateProjectStock(projectId) {
        const projectElements = await projectRepository.getProjectElements(projectId);
        await elementService.updateElementStock(projectElements);
    }
    /**
     * Add element to project
     * @param {number} projectId - Project ID
     * @param {number} elementId - Element ID
     * @param {number} quantity - Quantity of element to add
     * @param {number} userId - User ID
     * @param {string} role - User role
     * @returns {Promise<Object>}
     */
    async addElementToProject(projectId, elementId, quantity, userId, role) {
        // Validate project and user ownership or admin role
        const project = await projectRepository.getProjectById(projectId);
        if (!project) throw new Error('Project not found');
        if (project.user_id !== userId && role !== 'administrator') throw new Error('Not authorized to add elements to this project');

        // Validate element existence
        const element = await elementRepository.getElementById(elementId);
        if (!element) throw new Error('Element not found');

        // Add element to project
        await projectRepository.addElementToProject(projectId, elementId, quantity);
        return await projectRepository.getProjectById(projectId);
    }
    /**
     * Remove element from project
     * @param {number} projectId - Project ID
     * @param {number} elementId - Element ID
     * @param {number} userId - User ID
     * @param {string} role - User role
     * @returns {Promise<void>}
     */
    async removeElementFromProject(projectId, elementId, userId, role) {
        // Validate project and user ownership or admin role
        const project = await projectRepository.getProjectById(projectId);
        if (!project) throw new Error('Project not found');
        if (project.user_id !== userId && role !== 'administrator') throw new Error('Not authorized to remove elements from this project');

        // Remove element from project
        await projectRepository.removeElementFromProject(projectId, elementId);
    }


    /**
     * Close project and update stock
     * @param {number} projectId - Project ID
     * @param {number} userId - User ID
     * @param {string} role - User role
     * @returns {Promise<void>}
     */
    async closeProject(projectId, userId, role) {
        // Validate project and user ownership or admin role
        const project = await projectRepository.getProjectById(projectId);
        if (!project) throw new Error('Project not found');
        if (project.user_id !== userId && role !== 'administrator') throw new Error('Not authorized to close this project');

        // Update project status to 'ordered'
        await projectRepository.updateProjectStatus(projectId, 'ordered');

        // Update stock for elements in the project
        const projectElements = await projectRepository.getProjectElements(projectId);
        await elementService.updateElementStock(projectElements);
    }
}

export default new ProjectService();
