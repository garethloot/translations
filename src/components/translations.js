(() => ({
  name: 'translations',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useAllQuery, useEndpoint, getProperty } = B;
    const {
      modelId,
      translateData,
      keyPath,
      valuePath,
      keyProperty,
      valueProperty,
      endpoint,
    } = options;
    const isDev = env === 'dev';

    function redirect() {
      const history = useHistory();
      history.push(useEndpoint(endpoint));
    }

    const { loading, error, data, refetch } =
      modelId &&
      useAllQuery(modelId, {
        take: 200,
      });

    B.defineFunction('Translate', () => refetch());
    B.defineFunction('Translate and redirect', () => refetch());

    function deepFind(obj, path) {
      let object = obj;
      for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        object = obj[path[i]];
      }
      return object;
    }

    if (data && !isDev) {
      const { results, totalCount } = data;
      const translations = {};
      const { name: key } = getProperty(keyProperty);
      const { name: value } = getProperty(valueProperty);
      const itemKey = keyPath === '' ? key : `${keyPath}.${key}`;
      const itemValue = valuePath === '' ? value : `${valuePath}.${value}`;
      console.log(itemKey, itemValue);
      if (results) {
        results.forEach(item => {
          console.log(deepFind(item, keyPath), deepFind(item, itemValue));
          translations[deepFind(item, keyPath)] =
            item[deepFind(item, itemValue)];
        });
      }
      localStorage.setItem('translations', JSON.stringify(translations));
    }

    return isDev ? <div>Translations</div> : <></>;
  })(),
  styles: () => {},
}))();
