import portfolioSchema from "../models/portfolioModel.js";

export const portfolioController = {
  async createWork(req, res) {
    try {
      const newWork = await new portfolioSchema(req.body);
      await newWork.save();
      res.status(201).json({
        msg: "Created Works!",
        work: {
          ...newWork._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getWorks(req, res) {
    try {
      const works = await portfolioSchema.find();
      res.json({
        msg: `Get works`,
        work: works,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataWork(req, res) {
    try {
      const work = await portfolioSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata work",
        user: work,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async deletework(req, res) {
    try {
      const work = await portfolioSchema.findByIdAndDelete({
        _id: req.params.id,
      });
      res.json({
        msg: `Delete work`,
        user: work,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
