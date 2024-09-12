export const render = (renderArea, kit, inputType) => {
  let content = "";
  for (const entity of kit) content += inputType[entity];
  renderArea.innerHTML += content;
};
