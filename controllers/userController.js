import userSchema from "../models/userModel.js";

export const userController = {
  async createUser(req, res) {
    try {
      const newUser = await new userSchema(req.body);
      await newUser.save();
      res.status(201).json({
        msg: "Created Users!",
        User: {
          ...newUser._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getUser(req, res) {
    try {
      const Users = await userSchema.find({ slug: req.params.slug });
      res.json({
        msg: `Get User`,
        User: Users,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataUser(req, res) {
    try {
      const User = await userSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata User",
        user: User,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async deleteUser(req, res) {
    try {
      const User = await userSchema.findByIdAndDelete({
        _id: req.params.id,
      });
      res.json({
        msg: `Delete User`,
        user: User,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
