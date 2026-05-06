import express from "express";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", UserRoutes);

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});