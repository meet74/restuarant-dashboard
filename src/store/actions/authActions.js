import { FORGOTPASSWORD, LOGIN, SIGNUP } from '../constant';

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
  console.log(email, password);
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
  console.log(email);
  if (email != null) {
    return {
      type: FORGOTPASSWORD,
      email,
    };
  } else {
    return null;
  }
};
