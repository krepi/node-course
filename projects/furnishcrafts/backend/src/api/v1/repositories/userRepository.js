
import{query} from "../../../config/configDB.js";

class UserRepository {
   async getAllUsers() {
        const data = await query("SELECT * FROM users");
        return data.rows;
    }

    /**
     *
     * @param id
     * @returns {Promise<*>}
     */
   async getUserById(id) {
       const data = await query("SELECT * FROM users WHERE id = $1", [id]);
       return data.rows;
    }

    /**
     *
     * @param email
     * @returns {Promise<*>}
     */
    async getUserByEmail(email) {
        const data = await query("SELECT * FROM users WHERE email = $1", [email]);
        return data.rows[0];
    }

    /**
     *
     * @param user
     * @returns {Promise<*>}
     */
    async createUser(user) {
        const {name, email, password} = user;
        await query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
        return user;
    }
}

export default new UserRepository();
