/* eslint-disable camelcase */
import { PROFILE } from '../constant';

export const setProfileData = (user_id = null) => {
  if (user_id != null) {
    return {
      type: PROFILE,
      user_id,
    };
  }
  return null;
};

export const getProfileData = () => {};
