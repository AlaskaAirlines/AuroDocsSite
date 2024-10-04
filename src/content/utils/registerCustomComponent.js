export const registerCustomComponent = (customTag, scriptUrl) => {
  const customScriptId = `${customTag}-script`;
  let customScriptTag = document.getElementById(customScriptId);
  if (!customScriptTag) {
    customScriptTag = document.createElement('script');
    customScriptTag.type = 'module';
    customScriptTag.id = customScriptId;
    customScriptTag.async = true;
    document.body.appendChild(customScriptTag);
  }
};
