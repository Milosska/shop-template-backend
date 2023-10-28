import express from "express";
import cors from "cors";

import { router as cathegoriesRouter } from "./routes/cathegoriesRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cathegories", cathegoriesRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong. Please, try again later",
  });
});

export default app;