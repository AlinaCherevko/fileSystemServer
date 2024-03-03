import HttpError from "../helpers/HttpError.js";

export const checkExtations = (req, res, next) => {
  const EXTATIONS = ["txt", "js", "ts", "json"];

  const { fileName } = req.body;
  const ext = fileName.split(".").pop();
  if (!EXTATIONS.includes(ext)) {
    next(HttpError(400, `App don't support files with ${ext} extations`));
  }
  next();
};
