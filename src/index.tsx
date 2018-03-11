import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'todomvc-app-css/index.css';
import App from './main/App';

import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import todoStore from './stores/todoStore';

useStrict(true); // compile time에서는 알 수 없고 runtime 시점에만 잡아준다.

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
