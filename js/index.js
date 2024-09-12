import { tags, tagsKit, styles, stylesKit } from "./data.js";
import { loadFiles } from "./loadFiles.js";
import { render } from "./render.js";

await Promise.all([
  loadFiles(tagsKit, tags, "html"),
  loadFiles(stylesKit, styles, "css"),
]);

render(document.querySelector("style"), stylesKit, styles);
render(document.body, tagsKit, tags);
