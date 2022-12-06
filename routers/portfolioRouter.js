import { Router } from "express";
import { portfolioController } from "../controllers/portfolioController.js";
const { createWork, getWorks, updataWork, deletework } = portfolioController;
export const PortfolioRouter = Router();

PortfolioRouter.post("/create_work", createWork);
PortfolioRouter.post("/updata_work/:id", updataWork);
PortfolioRouter.get("/get_works", getWorks);
PortfolioRouter.delete("/delete_work/:id", deletework);
