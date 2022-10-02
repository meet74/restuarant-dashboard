import { takeEvery, put } from 'redux-saga/effects';
import {
  ADD_RESTAURANTS,
  API_URL,
  EDIT_RESTAURANT,
  GET_ALL_RESTAURANT,
  SET_EDITED_RESTAURANT_DATA,
  SET_RECIEVED_ALL_RESTAURANT_DATA,
  SET_RESTAURANTS_DATA,
  SET_UPDATED_RESTAURANT_STATUS,
  UPDATE_RESTAURANT_STATUS,
} from '../../constant';

function* addRestaurantsRequest(action) {
  const params = {
    name: action.restaurant.name,
    image_url: action.restaurant.image_url,
    status: action.restaurant.status,
    is_published: action.restaurant.is_published,
    order_options: action.restaurant.order_options,
    is_veg: action.restaurant.is_veg,
    is_non_veg: action.restaurant.is_non_veg,
  };

  const response = yield fetch(`${API_URL}/restaurant`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    const res = yield response.json();

    yield put({
      type: SET_RESTAURANTS_DATA,
      name: res.name,
      image_url: res.image_url,
      status: res.status,
      is_published: res.is_published,
      order_options: res.order_options,
      is_veg: res.is_veg,
      is_non_veg: res.is_non_veg,
    });
  } else {
    yield put({
      type: SET_RESTAURANTS_DATA,
      name: null,
      image_url: null,
      status: null,
      is_published: null,
      order_options: null,
      is_veg: null,
      is_non_veg: null,
    });
  }
}

function* editRestaurantsRequest(action) {
  const params = {
    name: action.restaurant.name,
    image_url: action.restaurant.image_url,
    status: action.restaurant.status,
    is_published: action.restaurant.is_published,
    order_options: action.restaurant.order_options,
    is_veg: action.restaurant.is_veg,
    is_non_veg: action.restaurant.is_non_veg,
  };
  console.log('edit', action);
  const response = yield fetch(
    `${API_URL}/restaurant/${action.restaurant_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
      body: JSON.stringify({ ...params }),
    }
  );
  console.log('a', response.status);
  if (response.status === 200) {
    yield put({
      type: SET_EDITED_RESTAURANT_DATA,
      restaurant_id: action.restaurant.restaurant_id,
      name: action.restaurant.name,
      image_url: action.restaurant.image_url,
      status: action.restaurant.status,
      is_published: action.restaurant.is_published,
      order_options: action.restaurant.order_options,
      is_veg: action.restaurant.is_veg,
      is_non_veg: action.restaurant.is_non_veg,
    });
  } else {
    yield put({
      type: SET_EDITED_RESTAURANT_DATA,
      name: null,
      image_url: null,
      status: null,
      is_published: null,
      order_options: null,
      is_veg: null,
      is_non_veg: null,
    });
  }
}

function* updateRestaurantStatusRequest(action) {
  const params = {
    status: action.restaurant.status,
    is_published: action.restaurant.is_published,
  };

  const response = yield fetch(
    `${API_URL}/restaurant/${action.restaurant.restaurant_id}`,
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
      type: SET_UPDATED_RESTAURANT_STATUS,
      restaurant_id: action.restaurant.restaurant_id,
      status: action.restaurant.status,
      is_published: action.restaurant.is_published,
    });
  } else {
    yield put({
      type: SET_UPDATED_RESTAURANT_STATUS,
      restaurant_id: action.restaurant.restaurant_id,
      status: action.restaurant.status,
      is_published: action.restaurant.is_published,
    });
  }
}

function* getAllRestaurantsRequest(action) {
  const response = yield fetch(`${API_URL}/restaurant/owner/all`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${action.token}`,
    },
  });

  if (response.status === 200) {
    const res = yield response.json();

    yield put({
      type: SET_RECIEVED_ALL_RESTAURANT_DATA,
      allRestaurants: res,
    });
  } else {
    yield put({
      type: SET_RECIEVED_ALL_RESTAURANT_DATA,
      allRestaurants: [],
    });
  }
}

function* RestaurantSaga() {
  yield takeEvery(ADD_RESTAURANTS, addRestaurantsRequest);
  yield takeEvery(GET_ALL_RESTAURANT, getAllRestaurantsRequest);
  yield takeEvery(UPDATE_RESTAURANT_STATUS, updateRestaurantStatusRequest);
  yield takeEvery(EDIT_RESTAURANT, editRestaurantsRequest);
}

export default RestaurantSaga;
