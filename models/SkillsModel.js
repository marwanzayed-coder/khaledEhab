import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const SkillsSchema = Schema({
  name: String,
  category: String,
  SkillOwner: {
    type: ObjectId,
    ref: "portfolio",
  },
});

export default mongoose.model("skills", SkillsSchema);
