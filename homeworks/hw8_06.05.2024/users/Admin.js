import User from "./User.js";

class Admin extends User{
    constructor(name, email, userId) {
        super(name, email, userId);
        this.admin = true;
    }

    manageUsers() {
        console.log('Admin managing users');
    }

    deleteUser(user) {
        console.log(`Admin ${this.name} deleted user ${user.name}`);
    }
}
export default Admin;