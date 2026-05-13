import UserService from "../services/UserService.js";
import BaseController from "./BaseController.js";
export class UserController extends BaseController {
  async getAllUsers(req, res) {
      const users = await UserService.getAllUsers();
      await BaseController.success(res, 'Users are gotten successfully', users);
  }

  async getOneUser(req, res) {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      await BaseController.success(res, 'User is retrieved successfully', user);
  }

  async create(req, res) {
      const userData = req.body;
      const createdUser = await UserService.createUser(userData);
      await BaseController.success(res, "User is created successfully", createdUser, 201);
  }

  async update(req, res) {
      const { id } = req.params;
      const userData = { id: Number(id), ...req.body };
      const updatedUser = await UserService.updateUser(userData);
      await BaseController.success(res, "User is changed successfully", updatedUser);
  }

  async delete(req, res) {
      const { id } = req.params;
      const user = await UserService.deleteUser(id);
      await BaseController.success(res, "User is deleted successfully", user);
  }
}

