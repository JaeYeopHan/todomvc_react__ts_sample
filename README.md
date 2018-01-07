# TODOMVC React-Redux-TypeScript Tutorials
TypeScript와 함께 react, redux의 기본을 학습하기 위한 튜토리얼입니다.

## Tutorials
- [Step-1. Setup]

## Step-1. Setup
```bash
$ npm install create-react-app
$ create-react-app todomvc_react_redux_ts --scripts-version=react-scripts-ts
$ cd todomvc_react_redux_ts
$ npm install --save-dev redux react-redux @types/react-redux
$ npm install --save-dev todomvc-app-css
```

src 폴더 밑에 있는 파일들 중 `App.tsx`, `index.tsx`를 제외하고 모두 삭제해줍니다.

### index.tsx
`index.tsx` 파일을 다음과 같이 수정해줍니다.
```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'todomvc-app-css/index.css';

import App from './App';
import rootReducer from './main/reducer';

const store: Store<object> = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
```
`index.tsx`에서는 redux의 Store와 `App`컴포넌트를 연결합니다. 그리고 각 작성될 reducer를 store에 연결합니다. TodoMVC에서 제공하는 css를 사용하기 위해 해당 css 파일도 import 해줍니다.

### App.tsx
그리고 `App.tsx` 파일을 다음과 같이 수정해줍니다.
```ts
import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>TODOs</h1>
        </header>
      </div>
    );
  }
}

export default App;
```

### main/reducer.ts
추후 작성될 reducer들을 `combine`하는 rootReducer를 만들 `reducer.ts`파일을 생성하고 다음과 같이 작성해줍니다.
```ts
import { combineReducers } from 'redux';

const rootReducer = combineReducers({

});

export default rootReducer;
```
`redux`에서 제공하는 `combineReducers`메소드를 통해 각 컴포넌트에서 사용하기 위해 작성될 reducer들을 하나로 합쳐주기 위한 장소입니다.
현재는 작성된 reducer가 없기 때문에 빈 객체를 전달해줍니다.

