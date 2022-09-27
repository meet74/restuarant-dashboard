import { configureStore, combineReducers } from '@reduxjs/toolkit';

import createSagaMiddleWare from 'redux-saga';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';

import AuthSaga from './sagas/handlers/authSaga';

// Setting up Saga as Middleware
const sagaMiddleWare = createSagaMiddleWare();

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
});
// creating Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

// running Saga middleware
sagaMiddleWare.run(AuthSaga);

export default store;
