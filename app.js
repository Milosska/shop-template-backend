import express from "express";
import cors from "cors";

import { router as cathegoriesRouter } from "./routes/cathegoriesRouter.js";
import { router as itemsRouter } from "./routes/itemsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/cathegories", cathegoriesRouter);
app.use("/api/items", itemsRouter);

app.use((req, res) => {
  res.status(404).json({
    message:
      "Use api on routes: /api/cathegories, or /api/items",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong. Please, try again later",
  });
});

export default app;
