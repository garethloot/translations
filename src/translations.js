const translateText = (value, translations) => {
  const text = value.replaceAll(/\{{(.*?)\}}/g, orig => {
    const keyValue = orig.slice(2, -2).split('|');
    const key = keyValue[0].trim();
    const defaultValue = keyValue[1] ? keyValue[1].trim() : orig;
    if (translations && translations.hasOwnProperty(key)) {
      return translations[key];
    }
    return defaultValue;
  });
  return text;
};

const useText = variable => {
  const translations = JSON.parse(localStorage.getItem('translations'));
  const translateData = localStorage.getItem('translateData') || false;
  return variable
    .map(value => {
      if (typeof value === 'string') {
        return translateText(value, translations);
      }
      if (value.type === 'PROPERTY' || value.type === 'ME_PROPERTY') {
        return translateData
          ? translateText(window.global.useProperty(value), translations)
          : window.global.useProperty(value);
      }

      if (value.type === 'VARIABLE') {
        return window.global.useVariable(value);
      }

      return null;
    })
    .join('');
};

export default function overrideTextHook() {
  if (window.artifact) {
    window.firstLoad = true;
    window.onload = () => {
      window.global.useText = useText;
    };
  }
}
