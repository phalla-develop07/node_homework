import express from "express";
import {UserController} from "../controllers/UserController.js";

const router = express.Router();
const userController = new UserController();

router.get("/", (req, res) =>
    userController.getAllUsers(req, res)
);

router.get("/:id", (req, res) =>
    userController.getOneUser(req, res)
);

router.post("/", (req, res) =>
    userController.create(req, res)
);

router.put("/:id", (req, res) =>
    userController.update(req, res)
);

router.delete("/:id", (req, res) =>
    userController.delete(req, res)
);

export default router;