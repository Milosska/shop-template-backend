import Cathegory from "../models/Cathegory.js";

export const getAllCathegoriesService = async () => {
  return await Cathegory.find({}, "-createdAt -updatedAt");
};
