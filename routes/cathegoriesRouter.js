import express from "express";
import { getAllCathegories } from "../controllers/cathegoriesController.js";

export const router = express.Router();

router.route("/").get(getAllCathegories);
