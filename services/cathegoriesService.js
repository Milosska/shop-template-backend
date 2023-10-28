import Collection from "../models/Collection.js";

export const getCathegoriesService = async () => {
  return await Collections.find({}, "-createdAt -updatedAt");
};
