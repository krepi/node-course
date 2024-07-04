import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';

class UserService {


    async createUser(user) {
        const existingUser = await userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        user.password  = await bcrypt.hash(user.password, 10);

        return await userRepository.createUser(user);
    }


    async getAllUsers() {
        return  await userRepository.getAllUsers();
    }

    async validateUser(email, password) {
        const user = await userRepository.getUserByEmail(email);
        if(!user) {
            throw new Error ('Invalid email or user does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }
        return user;
    }

    async getUserById(id) {
        return await userRepository.getUserById(id);
    }
}




export default new UserService();
