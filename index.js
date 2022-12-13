import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import { PortfolioRouter } from "./routers/portfolioRouter.js";
import { SkillRouter } from "./routers/SkillsRouter.js";
import { LinkRouter } from "./routers/linksRouter.js";
import { UserRouter } from "./routers/userRouter.js";
import { DashRouter } from "./routers/dashboardRouter.js";
import path from "path";

// Server Configuration
const PORT = process.env.PORT || 3050;
const app = express();
const httpServer = createServer(app);
const limiter = rateLimit({
  windowMs: 1000,
  max: 5,
});

app.use(cors());
app.use(bodyParser.json());
app.use(limiter);

// Database Configuration
const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL 
    );
  } catch (err) {
    console.log(err);
  }
};
connectToDB();

app.use("/api", PortfolioRouter);
app.use("/api", SkillRouter);
app.use("/api", LinkRouter);
app.use("/api", UserRouter);
app.use("/api", DashRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV == "production") {
  app.use(express.static(`${__dirname}/client/build`));
  app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

httpServer.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
