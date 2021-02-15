(() => ({
  name: 'translations',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useAllQuery, getProperty } = B;
    const { modelId, translateData, keyProperty, valueProperty } = options;
    const isDev = env === 'dev';
    const isFirstLoad = !isDev && window.firstLoad;

    function reload() {
      const history = useHistory();
      const current = location.pathname;
      history.replace(`/reload`);
      setTimeout(() => {
        history.replace(current);
      });
    }

    const { data, refetch } =
      isFirstLoad &&
      modelId &&
      useAllQuery(modelId, {
        take: 200,
      });

    B.defineFunction('Load Translations', () => refetch());

    if (data && !isDev) {
      const { results } = data;
      const translations = {};
      const { name: key } = getProperty(keyProperty);
      const { name: value } = getProperty(valueProperty);
      if (results) {
        results.forEach(item => {
          translations[item[key]] = item[value];
        });
      }
      localStorage.setItem('translations', JSON.stringify(translations));
      if (isFirstLoad) {
        window.firstLoad = false;
        reload();
      }
    }

    return isDev ? <div>Translations</div> : <></>;
  })(),
  styles: () => {},
}))();
