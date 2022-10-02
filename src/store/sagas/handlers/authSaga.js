import { takeEvery, put } from 'redux-saga/effects';

import {
  FORGOTPASSWORD,
  LOGIN,
  SET_LOGIN_DATA,
  SIGNUP,
  SET_SIGNUP_DATA,
  AUTH_API_URL,
} from '../../constant';

function* signupRequest(action) {
  const params = {
    email: action.email,
    password: action.password,
    phone_no: 12345678,
  };

  const response = yield fetch(`${AUTH_API_URL}/auth/signup`, {
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
      token: response.token,
    });
  } else {
    yield put({
      type: SET_SIGNUP_DATA,
      email: null,
      id: null,
      phone_no: null,
      status: response.status,
      token: null,
    });
  }
}

function* loginRequest(action) {
  const params = {
    email: action.email,
    password: action.password,
  };

  const response = yield fetch(`http://192.168.29.64:4000/api/auth/signin`, {
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
      token: res.token,
    });
  } else {
    yield put({
      type: SET_LOGIN_DATA,
      email: null,
      id: null,
      phone_no: null,
      status: response.status,
      token: null,
    });
  }
}

function* forgotPasswordRequest(action) {
  const params = {
    email: action.email,
  };

  const response = yield fetch(`${AUTH_API_URL}/auth/forgotpassword`, {
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
  yield takeEvery(SIGNUP, signupRequest);
  yield takeEvery(LOGIN, loginRequest);
  yield takeEvery(FORGOTPASSWORD, forgotPasswordRequest);
}

export default AuthSaga;
