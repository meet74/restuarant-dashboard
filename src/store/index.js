import { configureStore, combineReducers } from '@reduxjs/toolkit';

import createSagaMiddleWare from 'redux-saga';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import profileReducer from './reducers/profileReducer';
import restaurantReducer from './reducers/restaurantReducer';

import AuthSaga from './sagas/handlers/authSaga';
import profileSaga from './sagas/handlers/profileSaga';
import productSaga from './sagas/handlers/productSaga';
import RestaurantSaga from './sagas/handlers/restaurantSaga';

// Setting up Saga as Middleware
const sagaMiddleWare = createSagaMiddleWare();

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  restaurant: restaurantReducer,
  profile: profileReducer,
});
// creating Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

// running Saga middleware
sagaMiddleWare.run(AuthSaga);
sagaMiddleWare.run(profileSaga);
sagaMiddleWare.run(RestaurantSaga);
sagaMiddleWare.run(productSaga);

export default store;
