export const registerCustomComponent = (customTag, scriptUrl) => {
  const customIconScriptId = `${customTag}-script`;
  let customIconScriptTag = document.getElementById(customIconScriptId);
  if (!customIconScriptTag) {
    customIconScriptTag = document.createElement('script');
    customIconScriptTag.type = 'module';
    customIconScriptTag.id = customIconScriptId;
    customIconScriptTag.async = true;
    customIconScriptTag.innerHTML = `
      import { registerComponent } from "${scriptUrl}"
      registerComponent('${customTag}');
    `
    document.body.appendChild(customIconScriptTag);
  }
};
