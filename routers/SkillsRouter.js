import { Router } from "express";
import { SkillsController } from "../controllers/skillsController.js";
const { createSkill, getSkills, updataSkill, deleteSkill } = SkillsController;
export const SkillRouter = Router();

SkillRouter.post("/create_skill", createSkill);
SkillRouter.post("/updata_skill/:id", updataSkill);
SkillRouter.get("/get_skills", getSkills);
SkillRouter.delete("/delete_skill/:id", deleteSkill);
