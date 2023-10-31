import { catchAsyncWrapper } from "../utils/catchAsyncWrapper.js";
import { addNewItemService } from "../services/itemsService.js";

export const addNewItem = catchAsyncWrapper(async (req, res, next) => {
  const newItem = await addNewItemService(req.file, req.body);
  res.status(201).json(newItem);
});
