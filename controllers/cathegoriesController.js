import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import { getCathegoriesService } from "../services/cathegoriesService.js";

export const getCathegories = catchAsyncWrapper(async (req, res, next) => {
  const cathegories = await getCathegoriesService();
  res.status(200).json(cathegories);
});
