
import fs from "fs/promises";
import path from "path";
import HttpError from "../helpers/HttpError.js";
const folderPath = path.resolve("files");

export const createFile = async (req, res, next) => {
  const { fileName, content } = req.body;
  const filePath = path.resolve("files", fileName);
  try {
    const files = await fs.readdir(folderPath);
    const result = files.includes(fileName);
    if(result) {
      throw HttpError(409, "File for this name already exist");
    }

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


export const getFile = async (req, res, next) =>{
  const {filename} = req.params;

  try {
    const files = await fs.readdir(folderPath);
  const result = files.includes(filename);
  if(!result) {
    throw HttpError(404, "File  not exist");
  }
  const filePath = path.resolve("files", filename);
 const content =  await fs.readFile(filePath, "utf-8");
res.json({content})
  } catch(error){
    next(error);
  }
}