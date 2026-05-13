import UserRepository from "../Repositories/UserRepository.js";

class UserService {

    /** Get all users */
    static async getAllUsers() {
        try{
            const users = await UserRepository.getAll();
            return users;
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
    }

    /** Get a user by ID  */
    static async getUserById(id) {
        try {
            const user = await UserRepository.getById(id);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    /** Update user */
    static async updateUser(userData) {
        try {
            const user = await UserRepository.getById(userData.id);
            if (!user) {
                throw new Error("User not found");
            }
            const updatedUser = await UserRepository.update(userData);
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    /** Delete user */
    static async deleteUser(id) {
        try {
            const user = await UserRepository.getById(id);
            if (!user) {
                throw new Error("User not found");
            }
            await UserRepository.delete(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
    
}
export default UserService;