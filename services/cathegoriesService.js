import Cathegories from "../models/Cathegories.js";

export const getAllCathegoriesService = async () => {
  return await Cathegories.find({}, "-createdAt -updatedAt");
};
