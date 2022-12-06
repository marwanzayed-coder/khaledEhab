import mongoose from "mongoose";
const { Schema } = mongoose;

const portfolioSchema = Schema({
  title: String,
  image: String,
  behance: String,
});

export default mongoose.model("portfolio", portfolioSchema);
