import { takeEvery, put } from 'redux-saga/effects';
import {
  ADD_PRODUCT,
  API_URL,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  SET_DELETED_PRODUCT_DATA,
  SET_EDITED_PRODUCT_DATA,
  SET_PRODUCT_DATA,
  SET_RECIEVED_PRODUCTS_DATA,
  SET_UPDATED_PRODUCT_STATUS,
  UPDATE_PRODUCT_STATUS,
} from '../../constant';

function* addProductRequest(action) {
  console.log(action.dish.restaurant_id);
  const params = {
    restaurant_id: action.dish.restaurant_id,
    category_id: action.dish.category_id,
    name: action.dish.name,
    image_url: action.dish.image_url,
    price: action.dish.price,
    description: action.dish.description,
    is_available: action.dish.is_available,
    type: action.dish.type,
  };
  console.log('resP', params);
  console.log(action.token);
  const response = yield fetch(`${API_URL}/restaurant/dish`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  console.log('dishStatus', response.status);
  if (response.status === 200) {
    const res = yield response.json();
    console.log('dish', res);
    yield put({
      type: SET_PRODUCT_DATA,
      id: res.id,
      dish_id: res.id,
      restaurant_id: res.restaurant_id,
      category_id: res.category_id,
      name: res.name,
      image_url: res.image_url,
      price: res.price,
      description: res.description,
      is_available: res.is_available,
      dishType: res.type,
    });
  } else {
    console.log('dishError');
    yield put({
      type: SET_PRODUCT_DATA,
      dish_id: null,
      restaurant_id: null,
      category_id: null,
      name: null,
      image_url: null,
      price: null,
      description: null,
      is_available: null,
      dishType: null,
    });
  }
}

function* getAllProductsRequest(action) {
  const response = yield fetch(
    `${API_URL}/restaurant/dish/all/${action.restaurant_id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${action.token}`,
      },
    }
  );

  if (response.status === 200) {
    const res = yield response.json();

    yield put({
      type: SET_RECIEVED_PRODUCTS_DATA,
      dishes: res,
    });
  } else {
    yield put({
      type: SET_RECIEVED_PRODUCTS_DATA,
      dishes: [],
    });
  }
}

function* editProductRequest(action) {
  console.log(action.dish_id);
  const params = {
    category_id: action.dish.category_id,
    name: action.dish.name,
    image_url: action.dish.image_url,
    price: action.dish.price,
    description: action.dish.description,
    is_available: action.dish.is_available,
    type: action.dish.type,
  };
  console.log('resP', params);
  console.log(action.token);
  const response = yield fetch(`${API_URL}/restaurant/dish/${action.dish_id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  console.log('dishStatus', response.status);
  if (response.status === 200) {
    const res = yield response.json();
    console.log('dish', res);
    yield put({
      type: SET_EDITED_PRODUCT_DATA,
      dish_id: action.dish_id,
      restaurant_id: action.dish.restaurant_id,
      category_id: action.dish.category_id,
      name: action.dish.name,
      image_url: action.dish.image_url,
      price: action.dish.price,
      description: action.dish.description,
      is_available: action.dish.is_available,
      dishType: action.dish.type,
    });
  } else {
    console.log('dishError');
    yield put({
      type: SET_EDITED_PRODUCT_DATA,
      dish_id: action.dish_id,
      restaurant_id: action.dish.restaurant_id,
      category_id: action.dish.category_id,
      name: action.dish.name,
      image_url: action.dish.image_url,
      price: action.dish.price,
      description: action.dish.description,
      is_available: action.dish.is_available,
      dishType: action.dish.type,
    });
  }
}

function* deleteProductRequest(action) {
  const response = yield fetch(`${API_URL}/restaurant/dish/${action.dish_id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
  });
  console.log('delete', response.status);
  if (response.status === 200) {
    yield put({
      type: SET_DELETED_PRODUCT_DATA,
      dish_id: action.dish_id,
    });
  } else {
    yield put({
      type: SET_DELETED_PRODUCT_DATA,
      dish_id: action.dish_id,
    });
  }
}

function* updateProductStatusRequest(action) {
  const params = {
    is_available: action.dish.is_available,
  };
  console.log('saga', action);
  const response = yield fetch(
    `${API_URL}/restaurant/dish/${action.dish.dish_id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
      body: JSON.stringify({ ...params }),
    }
  );
  console.log('update', response.status);
  if (response.status === 200) {
    yield put({
      type: SET_UPDATED_PRODUCT_STATUS,
      dish_id: action.dish.dish_id,
      is_available: action.dish.is_available,
    });
  } else {
    yield put({
      type: SET_UPDATED_PRODUCT_STATUS,
      dish_id: action.dish.dish_id,
      is_available: action.dish.is_available,
    });
  }
}

function* RestaurantSaga() {
  yield takeEvery(ADD_PRODUCT, addProductRequest);
  yield takeEvery(GET_PRODUCTS, getAllProductsRequest);
  yield takeEvery(EDIT_PRODUCT, editProductRequest);
  yield takeEvery(DELETE_PRODUCT, deleteProductRequest);
  yield takeEvery(UPDATE_PRODUCT_STATUS, updateProductStatusRequest);
}

export default RestaurantSaga;
