import { query } from '../../../config/configDB.js';

class ProjectRepository {
    /**
     * Get all projects
     * @returns {Promise<Array>}
     */
    async getAllProjects() {
        const data = await query('SELECT * FROM projects');
        return data.rows;
    }

    /**
     * Get projects by user ID
     * @param {number} userId - User ID
     * @returns {Promise<Array>}
     */
    async getProjectsByUserId(userId) {
        const data = await query('SELECT * FROM projects WHERE user_id = $1', [userId]);
        return data.rows;
    }

    /**
     * Get project by ID
     * @param {number} projectId - Project ID
     * @returns {Promise<Object>}
     */
    async getProjectById(projectId) {
        const data = await query('SELECT * FROM projects WHERE id = $1', [projectId]);
        return data.rows[0];
    }

    /**
     * Get project elements by project ID
     * @param {number} projectId - Project ID
     * @returns {Promise<Array>}
     */
    async getProjectElements(projectId) {
        const data = await query('SELECT element_id, quantity FROM project_elements WHERE project_id = $1', [projectId]);
        return data.rows;
    }

    /**
     * Create a new project
     * @param {Object} projectData - Project data
     * @returns {Promise<Object>}
     */
    async createProject(projectData) {
        const { user_id, start_date, end_date, status, to_share } = projectData;
        const data = await query(
            'INSERT INTO projects (user_id, start_date, end_date, status, to_share) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, start_date, end_date, status, to_share]
        );
        return data.rows[0];
    }
    /**
     * Update project status
     * @param {number} projectId - Project ID
     * @param {string} status - New project status
     * @returns {Promise<void>}
     */
    async updateProjectStatus(projectId, status) {
        await query('UPDATE projects SET status = $1 WHERE id = $2', [status, projectId]);
    }
    /**
     * Add element to project
     * @param {number} projectId - Project ID
     * @param {number} elementId - Element ID
     * @param {number} quantity - Quantity of element to add
     * @returns {Promise<void>}
     */
    async addElementToProject(projectId, elementId, quantity) {
        await query('INSERT INTO project_elements (project_id, element_id, quantity) VALUES ($1, $2, $3) ON CONFLICT (project_id, element_id) DO UPDATE SET quantity = project_elements.quantity + $3', [projectId, elementId, quantity]);
    }
    /**
     * Remove element from project
     * @param {number} projectId - Project ID
     * @param {number} elementId - Element ID
     * @returns {Promise<void>}
     */
    async removeElementFromProject(projectId, elementId) {
        await query('DELETE FROM project_elements WHERE project_id = $1 AND element_id = $2', [projectId, elementId]);
    }

}

export default new ProjectRepository();

