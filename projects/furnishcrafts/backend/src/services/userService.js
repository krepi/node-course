import userRepository from '../repositories/userRepository.js';

class UserService {
   async getAllUsers() {
        return  await userRepository.getAllUsers();
    }

   async getUserByEmail(email) {
        return await userRepository.getUserByEmail(email);
    }

   async getUserById(id) {
        return await userRepository.getUserById(id);
    }

    async createUser(user) {
        const existingUser = await this.getUserByEmail(user.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        return userRepository.createUser(user);
    }
}

export default new UserService();
