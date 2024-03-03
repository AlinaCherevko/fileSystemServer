import express from "express";
import { createFile } from "../controllers/filesControllers";
import validateBody from "../helpers/validateBody";
import { createFilesSchema } from "../schemas/filesSchemas";
import { checkExtations } from "../middlewars/checkExtations";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFilesSchema),
  checkExtations,
  createFile
);

export default filesRouter;
