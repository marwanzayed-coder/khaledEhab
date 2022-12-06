import DashboardSchema from "../models/dashboardModel.js";

export const DashboardController = {
  async getDash(req, res) {
    try {
      const Dash = await DashboardSchema.find();
      res.json({
        msg: `Get Dash`,
        dash: Dash,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataDash(req, res) {
    try {
      const Dash = await DashboardSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata Dash",
        Dash: Dash,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
