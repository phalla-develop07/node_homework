// src/services/userService.js
import * as userModel from '../models/userModel.js';

export const fetchAllUsers = async () => {
  return await userModel.getAllUsers();
};

export const fetchUserById = async (id) => {
  if (!id) throw new Error('User ID is required');
  return await userModel.getUserById(id);
};

export const createNewUser = async (userData) => {
  if (!userData.name || !userData.email) {
    throw new Error('Name and email are required');
  }
  return await userModel.createUser(userData);
};

export const updateUser = async (id, userData) => { 
    if (!id) throw new Error('User ID is required');
    return await userModel.updateUser(id, userData);
};

export const deleteUser = async (id) => {
  if (!id) throw new Error('User ID is required');
  return await userModel.deleteUser(id);
};