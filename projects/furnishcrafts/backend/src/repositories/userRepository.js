import {readData, writeData} from "../helpers/mockedDataHelper.js";

class UserRepository {
   async getAllUsers() {
        const data = await readData();
        return data.users;
    }

   async getUserById(id) {
        const data = await readData();
        return data.users.find(user => user.id === id);
    }

    async getUserByEmail(email) {
        const data = await readData();
        return data.users.find(user => user.email === email);
    }

    async createUser(user) {
        const data = await readData();
        user.id = data.users.length + 1;
        data.users.push(user);
        writeData(data);
        return user;
    }
}

export default new UserRepository();
