import { readdir } from "fs";
import fs from "fs/promises";
import path from "path";
import HttpError from "../helpers/HttpError.js";
const folderPath = path.resolve("files");

export const createFile = async (req, res, next) => {
  const { fileName, content } = req.body;
  const filePath = path.resolve("files", fileName);
  try {
    await fs.writeFile(filePath, content);
    res.status(201).json({ message: "File was created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getFiles = async (req, res, next) => {
  try {
    const files = await fs.readdir(folderPath);
    if (!files.length) {
      throw HttpError(404, "Folder is empty");
    }
    res.json(files);
  } catch (error) {
    next(error);
  }
};
