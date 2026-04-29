import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users_db"
});

console.log("Connected to database");

export default db;