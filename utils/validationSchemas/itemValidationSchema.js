import Joi from "joi";
import { cathegoryConstants } from "../constants/constants.js";

export const createNewItemValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "any.required": "field {{#label}} is missing",
  }),
  price: Joi.number().positive().min(1).precision(2).required().messages({
    "any.required": "field {{#label}} is missing",
    "number.precision":
      "{{#label}} field must have no more than 2 decimal places",
    "number.min": "{{#label}} must be greater than or equal to {{#limit}}",
    "number.positive": "{{#label}} must be a positive number",
  }),
  article: Joi.number().required().messages({
    "any.required": "field {{#label}} is missing",
  }),
  volume: Joi.string().trim().required().messages({
    "any.required": "field {{#label}} is missing",
    "string.trim": "{{#label}} must not have leading or trailing whitespace",
  }),
  cathegory: Joi.string()
    .trim()
    .valid(...cathegoryConstants)
    .required()
    .messages({
      "any.required": "field {{#label}} is missing",
      "any.invalid": "{{#label}} contains an invalid value",
      "string.trim": "{{#label}} must not have leading or trailing whitespace",
    }),
  description: Joi.string().trim().messages({
    "string.trim": "{{#label}} must not have leading or trailing whitespace",
  }),
});
