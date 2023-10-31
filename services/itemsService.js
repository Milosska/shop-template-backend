import fs from 'fs/promises';
import path from 'path';

import HttpError from "../utils/HttpError.js";
import Item from "../models/Item.js";


export const addNewItemService = async (file, data) => {
  const { article } = data;

  const itemInBase = await Item.find({ article });

  if (itemInBase.length > 0) {
    throw new HttpError(409, "The item is already in the base");
  }

  // picture save part + add imgURL to newItem below
  const { path: oldPath, filename } = file;
  const newPath = `${path.join(process.cwd(), "public", "products", filename)}`;
  await fs.rename(oldPath, newPath);

  const newItem = await Item.create({
    ...data,
    imgURL: `${path.join("products", filename)}`,
  });

  return newItem;
};
