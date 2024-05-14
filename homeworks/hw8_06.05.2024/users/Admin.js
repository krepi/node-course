import User from "./User.js";

/**
 * Class representing an Admin user with extended privileges.
 * @extends User
 */
class Admin extends User {
    /**
     * Create an Admin user.
     * @param {string} name - The name of the admin.
     * @param {string} email - The email address of the admin.
     * @param {string} userId - The user ID for the admin.
     */
    constructor(name, email, userId) {
        super(name, email, userId);
        this.admin = true;
    }

    /**
     * Simulate managing users.
     */
    manageUsers() {
        console.log('Admin managing users');
    }

    /**
     * Simulate deleting a user from the system.
     * @param {User} user - The user to delete.
     */
    deleteUser(user) {
        console.log(`Admin ${this.name} deleted user ${user.name}`);
    }
}

export default Admin;
