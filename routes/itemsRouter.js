import express from "express";

import validateBody from "../utils/validateBody.js";
import fileUpload from "../utils/fileUpload.js";

import { createNewItemValidationSchema } from "../utils/validationSchemas/itemValidationSchema.js";
import { addNewItem } from "../controllers/itemsController.js";

export const router = express.Router();

router.route("/").post(fileUpload.single('image'), validateBody(createNewItemValidationSchema), addNewItem);
