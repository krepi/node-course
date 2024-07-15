import {readData, writeData} from "../../../helpers/mockedDataHelper.js";
import{query} from "../../../config/configDB.js";

class UserRepository {
   async getAllUsers() {
        const data = await query("SELECT * FROM users");
        return data.rows;
    }

   async getUserById(id) {
       const data = await query("SELECT * FROM users WHERE id = $1", [id]);
       return data.rows;
    }

    async getUserByEmail(email) {
        const data = await query("SELECT * FROM users WHERE email = $1", [email]);
        return data.rows[0];
    }

    async createUser(user) {
        const {name, email, password} = user;
        await query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
        return user;
    }
}

export default new UserRepository();
