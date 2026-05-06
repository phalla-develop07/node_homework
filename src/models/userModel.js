import BaseModel from "./BaseModel.js";
import db from "../config/db.js";

class UserModel extends BaseModel {

  static async getAll() {
    const result = await this.query(`SELECT * FROM users`);
    return result;
  }

  static async getUserById(id) {
    const result = await this.query(`SELECT * FROM users WHERE id = ?`,[id]);
    return result[0];
  }

  static async createUser(data) {
    const { name, age, email, class: className}= data;
    const result = await this.query("INSERT INTO users (name, age, email, class) VALUES (?, ?, ?, ?)", [name, age, email, className]);
    return result;
  }

  static async updateUser(data) {
    const { id, name, age, email, class: className } = data;
    const result = await this.query(`UPDATE users SET name = ?, age = ?, email = ?, class = ? WHERE id = ?`,
      [name, age, email, className, id]);
    return result;
  }

  static async deleteUser(id){
    const result = await this.query(`DELETE FROM users WHERE id = ?`, [id]);
    return result;
  }

}

export default UserModel;
