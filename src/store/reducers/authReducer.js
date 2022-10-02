import {
  SET_SIGNUP_DATA,
  SET_LOGIN_DATA,
  SET_FORGOTPASSWORD_DATA,
  LOGOUT,
} from '../constant';

const initialState = {
  id: null,
  email: null,
  phoneNumber: null,
  status: null,
  token: JSON.parse(localStorage.getItem('token')),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_DATA:
      return {
        ...state,
        email: action.email,
        id: action.id,
        phoneNumber: action.phone_no,
        status: action.status,
      };
    case SET_LOGIN_DATA:
      localStorage.setItem('token', JSON.stringify(action.token));
      return {
        ...state,
        email: action.email,
        id: action.id,
        phoneNumber: action.phone_no,
        status: action.status,
        token: action.token,
      };
    case SET_FORGOTPASSWORD_DATA:
      return {
        ...state,
        email: action.email,
        id: state.id,
        phoneNumber: state.phoneNumber,
        status: action.status,
      };
    case LOGOUT:
      return {
        id: null,
        email: null,
        phoneNumber: null,
        status: null,
        token: null,
      };
    default:
      return state;
  }
};
