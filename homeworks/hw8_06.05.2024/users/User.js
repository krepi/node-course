/**
 * Class representing a basic user.
 */
class User {
    /**
     * Create a user.
     * @param {string} name - The name of the user.
     * @param {string} email - The email address of the user.
     * @param {string} userId - The unique identifier for the user.
     */
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}

export default User;
