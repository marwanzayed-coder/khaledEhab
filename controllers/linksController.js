import linksSchema from "../models/linksModel.js";

export const LinksController = {
  async createLink(req, res) {
    try {
      const newLink = await new linksSchema(req.body);
      await newLink.save();
      res.status(201).json({
        msg: "Created Link!",
        Link: {
          ...newLink._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getLinks(req, res) {
    try {
      const Links = await linksSchema.find();
      res.json({
        msg: `Get Links`,
        Link: Links,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataLink(req, res) {
    try {
      const Link = await linksSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata Link",
        Link: Link,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async deleteLink(req, res) {
    try {
      const Link = await linksSchema.findByIdAndDelete({
        _id: req.params.id,
      });
      res.json({
        msg: `Delete Link`,
        Link: Link,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
