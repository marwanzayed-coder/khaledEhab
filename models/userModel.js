import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = Schema({
  name: String,
  desc: String,
  jobTitle: String,
  slug: String,
});

export default mongoose.model("user", userSchema);
