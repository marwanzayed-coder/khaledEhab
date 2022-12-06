import { Router } from "express";
import { userController } from "../controllers/userController.js";
const { createUser, getUser, updataUser, deleteUser } = userController;
export const UserRouter = Router();

UserRouter.post("/create_user", createUser);
UserRouter.post("/updata_user/:id", updataUser);
UserRouter.get("/get_user/:slug", getUser);
UserRouter.delete("/delete_user/:id", deleteUser);
