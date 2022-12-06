import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const LinksSchema = Schema({
  facebook: String,
  twitter: String,
  linkedinIn: String,
  behance: String,
  github: String,
  instagram: String,
  youtube: String,
  LinksOwner: {
    type: ObjectId,
    ref: "portfolio",
  },
});

export default mongoose.model("links", LinksSchema);
