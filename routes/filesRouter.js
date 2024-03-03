import express from "express";
import { createFile, getFiles } from "../controllers/filesControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createFilesSchema } from "../schemas/filesSchemas.js";
import { checkExtations } from "../middlewars/checkExtations.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFilesSchema),
  checkExtations,
  createFile
);

filesRouter.get("/", getFiles);
export default filesRouter;
