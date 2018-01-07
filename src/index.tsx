import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'todomvc-app-css/index.css';
import App from './main/App';
import rootReducer from './main/reducer';

const store: Store<object> = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
