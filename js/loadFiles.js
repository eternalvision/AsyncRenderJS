import { readFile } from "./readFile.js";

export const loadFiles = async (kit, inputType, type) =>
  await Promise.all(
    kit.map((entity) =>
      readFile(inputType, `../${type}/`, entity, type, "text"),
    ),
  );
