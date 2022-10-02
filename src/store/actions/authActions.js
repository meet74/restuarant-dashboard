import { FORGOTPASSWORD, LOGIN, LOGOUT, SIGNUP } from '../constant';

export const signupUser = (email = null, password = null) => {
  if (email != null && password != null) {
    return {
      type: SIGNUP,
      email,
      password,
    };
  } else {
    return null;
  }
};

export const loginUser = (email = null, password = null) => {
  if (email != null && password != null) {
    return {
      type: LOGIN,
      email,
      password,
    };
  } else {
    return null;
  }
};

export const forgotPassword = (email = null) => {
  if (email != null) {
    return {
      type: FORGOTPASSWORD,
      email,
    };
  } else {
    return null;
  }
};

export const logOut = () => {
  localStorage.setItem('token', null);
  return {
    type: LOGOUT,
  };
};
