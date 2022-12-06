import { Router } from "express";
import { LinksController } from "../controllers/linksController.js";
const { createLink, getLinks, updataLink, deleteLink } = LinksController;
export const LinkRouter = Router();

LinkRouter.post("/create_link", createLink);
LinkRouter.post("/updata_link/:id", updataLink);
LinkRouter.get("/get_links", getLinks);
LinkRouter.delete("/delete_link/:id", deleteLink);
