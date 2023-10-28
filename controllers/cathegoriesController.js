import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import { getAllCathegoriesService } from "../services/cathegoriesService.js";

export const getAllCathegories = catchAsyncWrapper(async (req, res, next) => {
  const cathegories = await getAllCathegoriesService();
  res.status(200).json(cathegories);
});
