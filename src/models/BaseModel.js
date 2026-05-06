import db from "../config/db.js";

export class BaseModel {
  static async query(sql, params = []) {
    try {
      const [result] = await db.query(sql, params);
      return result;
    } catch (error) {
      throw error.message;
    }
  }
}

export default BaseModel;