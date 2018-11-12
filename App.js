import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducer/index';
import Navigate from './navigation/StackNavigation';
import thunk from 'redux-thunk';

const store = createStore(myReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigate/>
      </Provider>
    );
  }
}

export default App;