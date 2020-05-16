import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { PersistGate } from 'redux-persist/es/integration/react';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './redux/store';

const { store, persistor, isReady } = configureStore();

const target = document.getElementById('root');
const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

let cleanup;
const render = () => {
  /**
   * Assign some sort of cleanup function
   */
  if (cleanup) cleanup();

  /**
   * Render the actual app
   */
  ReactDOM.render(app, target);
};

const webFontConfig = {
  custom: {
    families: ['Oxygen Mono'],
  },
  classes: false,
  timeout: 1000,
  active: render, // invoked when fonts are loaded
};

isReady.finally(async () => {
  //await store.dispatch(authorize());

  //npm start
  //store.dispatch(bootstrap());
  return WebFont.load(webFontConfig);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
