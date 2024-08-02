import { query } from '../../../config/configDB.js';

class ProjectRepository {
    async getAllProjects() {
        const data = await query('SELECT * FROM projects');
        return data.rows;
    }

    async getProjectsByUserId(userId) {
        const data = await query('SELECT * FROM projects WHERE user_id = $1', [userId]);
        return data.rows;
    }

    async createProject(projectData) {
        const { user_id, start_date, end_date, status, to_share } = projectData;
        const data = await query(
            'INSERT INTO projects (user_id, start_date, end_date, status, to_share) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, start_date, end_date, status, to_share]
        );
        return data.rows[0];
    }
}

export default new ProjectRepository();
