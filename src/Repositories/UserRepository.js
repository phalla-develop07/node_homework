import UserModel from "../models/UserModel.js";

class UserRepository {

  // Get all users from database
  static async getAll() {
    return await UserModel.getAll();
  }

  // Get a user by ID
  static async getById(id) {
    return await UserModel.getUserById(id);
  }

  // Create a new user
  static async create(userData) {
    return await UserModel.createUser(userData);
  }

  // Update a user
  static async update(userData) {
    return await UserModel.updateUser(userData);
  }

  // Delete a user
  static async delete(id) {
    return await UserModel.deleteUser(id);
  }
}

export default UserRepository;