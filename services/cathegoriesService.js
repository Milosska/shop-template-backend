import Collection from "../models/Collection.js";

export const getAllCathegoriesService = async () => {
  return await Collections.find({}, "-createdAt -updatedAt");
};
