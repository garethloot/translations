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
      keyProperty,
      valueProperty,
      endpoint,
    } = options;
    const isDev = env === 'dev';

    function redirect() {
      if (endpoint) {
        const history = useHistory();
        history.push(useEndpoint(endpoint));
      }
    }

    const { data, refetch } =
      modelId &&
      useAllQuery(modelId, {
        take: 200,
      });

    B.defineFunction('Load Translations', () => refetch());
    B.defineFunction('Load Translations and Redirect', () => {
      window.redirect = true;
      redirect();
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
      if (window.firstLoad || window.redirect) {
        window.firstLoad = false;
        window.redirect = false;
        redirect();
      }
      B.triggerEvent('onSuccess');
    }

    return isDev ? <div>Translations</div> : <></>;
  })(),
  styles: () => {},
}))();
