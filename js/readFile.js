export const readFile = async (inputType, path, name, ext, resType) => {
  try {
    const response = await fetch(`${path}${name}.${ext}`);
    inputType[name] = await response[resType]();
  } catch (error) {
    console.error(`Failed to load ${name}.${ext}:`, error);
  }
};
