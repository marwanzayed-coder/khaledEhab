import mongoose from "mongoose";
const { Schema } = mongoose;

const DashboardSchema = Schema({
  username: String,
  password: String,
});

export default mongoose.model("dashboard", DashboardSchema);
