import fs from 'fs';
import path from 'path';

const dataPath = path.join(path.resolve(), '/data/data.json');

function readData() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

class UserRepository {
    getAllUsers() {
        const data = readData();
        return data.users;
    }

    getUserById(id) {
        const data = readData();
        return data.users.find(user => user.id === id);
    }

    getUserByEmail(email) {
        const data = readData();
        return data.users.find(user => user.email === email);
    }

    createUser(user) {
        const data = readData();
        user.id = data.users.length + 1;
        data.users.push(user);
        writeData(data);
        return user;
    }
}

export default new UserRepository();
