import { put, takeEvery } from 'redux-saga/effects';
import { PROFILE, SET_PROFILE_DATA } from '../../constant';

function* setProfile(action) {
  const params = {
    user_id: action.user_id,
    role_id: 4,
    avatar_link: 'string',
  };

  const response = yield fetch(`http://192.168.29.64:3001/api/users/profiles`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    const res = yield response.json();
    yield put({
      type: SET_PROFILE_DATA,
      id: res.id,
      user_id: action.user_id,
      role_id: 1,
      avatar_link: 'abcd.jpg',
      status: response.status,
    });
  } else {
    yield put({
      type: SET_PROFILE_DATA,
      id: null,
      user_id: null,
      role_id: null,
      avatar_link: null,
      status: response.status,
    });
  }
}

function* profileSaga() {
  yield takeEvery(PROFILE, setProfile);
}

export default profileSaga;
