import projectRepository from '../repositories/projectRepository.js';

class ProjectService {
    async getAllProjects() {
        return await projectRepository.getAllProjects();
    }

    async getProjects(userId, role) {
        if (role === 'administrator') {
            return await this.getAllProjects();
        } else {
            return await projectRepository.getProjectsByUserId(userId);
        }
    }

    async createProject(projectData) {
        return await projectRepository.createProject(projectData);
    }
}

export default new ProjectService();
