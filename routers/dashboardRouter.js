import { Router } from "express";
import { DashboardController } from "../controllers/dashboardController.js";
const { getDash, updataDash } = DashboardController;
export const DashRouter = Router();

DashRouter.post("/updata_dash/:id", updataDash);
DashRouter.get("/get_dash", getDash);
