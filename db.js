import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }
  console.log("MySQL Connected");
});

export default db;