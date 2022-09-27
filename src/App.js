import React from 'react';
import RouterNav from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouterNav />;
    </Provider>
  );
}

export default App;
