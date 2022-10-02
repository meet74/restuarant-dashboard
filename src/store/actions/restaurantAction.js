import {
  ADD_RESTAURANTS,
  EDIT_RESTAURANT,
  GET_ALL_RESTAURANT,
  SET_RESTAURANT_DATA,
  UPDATE_RESTAURANT_STATUS,
} from '../constant';

/* eslint-disable no-unused-vars */
export const addRestaurants = ({
  name = null,
  image_url = null,
  status = null,
  is_published = null,
  order_options = null,
  is_veg = null,
  is_non_veg = null,
  token = null,
}) => {
  const restaurantsData = {
    name,
    image_url,
    status,
    is_published,
    order_options,
    is_veg,
    is_non_veg,
  };

  return {
    type: ADD_RESTAURANTS,
    restaurant: restaurantsData,
    token,
  };
};

export const editRestaurant = ({
  restaurant_id = null,
  name = null,
  image_url = null,
  status = null,
  is_published = null,
  order_options = null,
  is_veg = null,
  is_non_veg = null,
  token = null,
}) => {
  const restaurantsData = {
    name,
    image_url,
    status,
    is_published,
    order_options,
    is_veg,
    is_non_veg,
  };
  console.log(restaurantsData);
  return {
    type: EDIT_RESTAURANT,
    restaurant: restaurantsData,
    token,
    restaurant_id,
  };
};

export const setRestaurant = (restaurant) => {
  return {
    type: SET_RESTAURANT_DATA,
    restaurant,
  };
};

export const getAllRestaurants = (token) => {
  return {
    type: GET_ALL_RESTAURANT,
    token,
  };
};

export const updateRestaurantStatus = ({
  token = null,
  restaurant_id = null,
  status = null,
  is_published = null,
}) => {
  const restaurant = {
    restaurant_id,
    status,
    is_published,
  };
  console.log('action', restaurant);
  return {
    type: UPDATE_RESTAURANT_STATUS,
    restaurant,
    token,
  };
};
