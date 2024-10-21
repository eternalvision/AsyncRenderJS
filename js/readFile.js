export const readFile = async (
  inputType,
  path,
  name,
  ext,
  resType,
  replacements,
) => {
  try {
    const response = await fetch(`${path}${name}.${ext}`);
    let content = await response[resType]();

    for (const [key, value] of Object.entries(replacements)) {
      const regex = new RegExp(`{{${key}}}`, "g");
      content = content.replace(regex, value);
    }

    inputType[name] = content;
  } catch (error) {
    console.error(`Failed to load ${name}.${ext}:`, error);
  }
};
