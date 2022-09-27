import { takeEvery } from 'redux-saga/effects';

import {
  API_URL,
  FORGOTPASSWORD,
  LOGIN,
  SET_LOGIN_DATA,
  SIGNUP,
} from '../../constant';

import { put } from 'redux-saga/effects';
import { SET_SIGNUP_DATA } from '../../constant';

function* signupRequest(action) {
  const params = {
    email: action.email,
    password: action.password,
    phone_no: 12345678,
  };

  console.log('params', params);
  const response = yield fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    const res = yield response.json();

    yield put({
      type: SET_SIGNUP_DATA,
      email: res.user.email,
      id: res.user.id,
      phone_no: res.user.phone_no,
      status: response.status,
    });
  } else {
    yield put({
      type: SET_SIGNUP_DATA,
      email: null,
      id: null,
      phone_no: null,
      status: response.status,
    });
  }
}

function* loginRequest(action) {
  const params = {
    email: action.email,
    password: action.password,
  };

  console.log('params', params);
  const response = yield fetch(`${API_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    const res = yield response.json();

    yield put({
      type: SET_LOGIN_DATA,
      email: res.user.email,
      id: res.user.id,
      phone_no: res.user.phone_no,
      status: response.status,
    });
  } else {
    yield put({
      type: SET_LOGIN_DATA,
      email: null,
      id: null,
      phone_no: null,
      status: response.status,
    });
  }
}

function* forgotPasswordRequest(action) {
  const params = {
    email: action.email,
  };

  console.log('params', params);
  const response = yield fetch(`${API_URL}/auth/forgotpassword`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    yield put({
      type: SET_LOGIN_DATA,
      email: action.email,
      id: null,
      phone_no: null,
      status: response.status,
    });
  } else {
    yield put({
      type: SET_LOGIN_DATA,
      email: null,
      id: null,
      phone_no: null,
      status: response.status,
    });
  }
}

function* AuthSaga() {
  console.log('Shreehari');
  yield takeEvery(SIGNUP, signupRequest);
  yield takeEvery(LOGIN, loginRequest);
  yield takeEvery(FORGOTPASSWORD, forgotPasswordRequest);
}

export default AuthSaga;
