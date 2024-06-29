import userRepository from '../repositories/userRepository.js';

class UserService {
    getAllUsers() {
        return userRepository.getAllUsers();
    }

    getUserByEmail(email) {
        return userRepository.getUserByEmail(email);
    }

    createUser(user) {
        const existingUser = this.getUserByEmail(user.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        return userRepository.createUser(user);
    }
}

export default new UserService();
