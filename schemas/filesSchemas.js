import Joi from "joi";

export const createFilesSchema = Joi.object({
  fileName: Joi.string().required(),
  content: Joi.string().required(),
});
