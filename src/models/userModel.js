// src/models/userModel.js
import db from '../config/db.js';

export const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

export const createUser = async (userData) => {
  const { name, age, email, class:userClass } = userData;
  const [result] = await db.query('INSERT INTO users (name, age, email, class) VALUES (?, ?, ?, ?)', [name, age, email, userClass]);
  return result.insertId;
};

export const updateUser = async (id, userData) => {
  const { name, age, email, class:userClass } = userData;
  await db.query('UPDATE users SET name = ?, age = ?, email = ?, class = ? WHERE id = ?', [name, age, email, userClass, id]);
  return id;
};

export const deleteUser = async (id) => {
  const [result] = await db.execute(
    'DELETE FROM users WHERE id = ?',
    [id]
  );
  return result.affectedRows;
};