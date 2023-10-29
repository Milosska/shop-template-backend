import HttpError from "../utils/HttpError.js";
import Item from "../models/Item.js";

export const addNewItemService = async (data) => {
  const { article } = data;

  const itemInBase = await Item.find({ article });

  if (itemInBase.length > 0) {
    throw new HttpError(409, "The item is already in the base");
  }

  // picture save part + add imgURL to newItem below

  const newItem = await Item.create({
    ...data,
    imgURL: "https://images.heb.com/is/image/HEBGrocery/001858900-1",
  });

  return newItem;
};
