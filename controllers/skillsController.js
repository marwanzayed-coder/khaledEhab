import SkillsSchema from "../models/SkillsModel.js";

export const SkillsController = {
  async createSkill(req, res) {
    try {
      const newSkill = await new SkillsSchema(req.body);
      await newSkill.save();
      res.status(201).json({
        msg: "Created Skill!",
        skill: {
          ...newSkill._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getSkills(req, res) {
    try {
      const skills = await SkillsSchema.find();
      res.json({
        msg: `Get Skills`,
        skill: skills,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataSkill(req, res) {
    try {
      const skill = await SkillsSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata Skill",
        skill: skill,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async deleteSkill(req, res) {
    try {
      const skill = await SkillsSchema.findByIdAndDelete({
        _id: req.params.id,
      });
      res.json({
        msg: `Delete Skill`,
        skill: skill,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
