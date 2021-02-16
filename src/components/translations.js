(() => ({
  name: 'translations',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useAllQuery, getProperty } = B;
    const {
      modelId,
      filter: where,
      translateData,
      fetchType,
      keyProperty,
      valueProperty,
    } = options;
    const isDev = env === 'dev';
    const doLoad = (!isDev && window.firstLoad) || fetchType === 'interaction';

    if (translateData) localStorage.setItem('translateData', true);

    function reload() {
      const history = useHistory();
      const current = location.pathname;
      history.replace(`/reload`);
      setTimeout(() => {
        history.replace(current);
      });
    }

    const { data, refetch } =
      doLoad &&
      modelId &&
      useAllQuery(modelId, {
        filter: where,
        take: 200,
      });

    B.defineFunction('Load Translations', () => {
      window.firstLoad = true;
      refetch();
    });

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
      if (window.firstLoad) {
        window.firstLoad = false;
        reload();
      }
    }

    return isDev ? <div>Translations</div> : <></>;
  })(),
  styles: () => {},
}))();
