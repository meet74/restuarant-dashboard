/* eslint-disable default-param-last */

import { SET_PROFILE_DATA } from '../constant';

const initialState = {
  id: null,
  user_id: null,
  role_id: null,
  avatar_link: null,
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      console.log('pa', action);
      return {
        ...state,
        id: action.id,
        user_id: action.user_id,
        role_id: action.role_id,
        avatar_link: action.avatar_link,
        status: action.status,
      };

    default:
      return state;
  }
};
