(() => ({
  name: 'translations',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const isDev = env === 'dev';
    const firstLoad = window.firstLoad;
    if (!isDev && firstLoad) {
      window.firstLoad = false;
    }
    return isDev ? <div className={classes.root}>Translations</div> : <></>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
