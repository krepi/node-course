import projectService from '../services/projectService.js';

class ProjectController {
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

    async getAllProjects(req, res) {
        try {
            const projects = await projectService.getAllProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

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
}

export default ProjectController;
