// src/controllers/userController.js
import * as userService from '../services/userService.js';

export const getUsers = async (req, res) => {
  try {
    const users = await userService.fetchAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.fetchUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUserId = await userService.createNewUser(req.body);
    res.status(201).json({ id: newUserId, ...req.body });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try { 
    const updatedUserId = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ id: updatedUserId, ...req.body });
  } catch (error){
    res.status(400).json({ message: error.message });
  }
  }

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};