import UserModel from "../models/UserModel.js";
import BaseController from "./BaseController.js";
export class UserController extends BaseController {
  async getAllUsers(req, res) {
        try {
            const users = await UserModel.getAll();
            await BaseController.success(res, 'Users are gotten successfully', users);
        } catch (error) {
            console.error(error);
            await BaseController.error(res, 'Server Error', 500);
        }
    }

  async getOneUser (req, res) {
      try {
          const { id } = req.params;
          const user = await UserModel.getUserById(id);
          if (!user) {
              return await BaseController.error(res, 'User not found', 404);
          }
          await BaseController.success(res, 'User is retrieved successfully', user);
      } catch (error) {
          console.error(error);
          await BaseController.error(res, 'Server Error', 500);
      }
  }

  async create(req, res) {
    try {
      const userData = req.body;
      const result = await UserModel.createUser(userData);
      const createdUser = { id: result.insertId, ...userData };
      await BaseController.success(res, "User is created successfully", createdUser, 201);
    } catch (error) {
      console.error(error);
      await BaseController.error(res, error || 'Server Error', 500);
    }
  }

  async update(req, res) {
    try{
      const { id } = req.params;
      const userData = { id: Number(id), ...req.body };
      const result = await UserModel.updateUser(userData);
      if (result.affectedRows === 0) {
        return await BaseController.error(res, 'User not found to update', 404);
      }
      
      await BaseController.success(res, "User is changed successfully", userData);
    } catch (error) {
      console.error(error);
      await BaseController.error(res, error || 'Server Error', 500);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
      if (!user) {
        return await BaseController.error(res, 'User not found to delete', 404);
      }
      await UserModel.deleteUser(id);
      await BaseController.success(res, "User is deleted successfully", user);
    } catch (error) {
      console.error(error);
      await BaseController.error(res, error || 'Server Error', 500);
    }
  }
}

