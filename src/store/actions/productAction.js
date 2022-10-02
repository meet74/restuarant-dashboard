import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT_STATUS,
} from '../constant';

export const getProduct = (restaurant = null, token = null) => {
  if (restaurant != null) {
    const restaurant_id = restaurant.id;
    return {
      type: GET_PRODUCTS,
      restaurant_id,
      token,
    };
  } else {
    return {
      type: GET_PRODUCTS,
      restaurant_id: null,
      token,
    };
  }
};

export const addProduct = ({
  restaurant_id = null,
  category_id = null,
  name = null,
  image_url = null,
  price = null,
  description = null,
  is_available = null,
  type = null,
  token = null,
}) => {
  const dish = {
    restaurant_id,
    category_id,
    name,
    image_url,
    price,
    description,
    is_available,
    type,
  };

  return {
    type: ADD_PRODUCT,
    dish,
    token,
  };
};

export const editProduct = ({
  dish_id = null,
  restaurant_id = null,
  category_id = null,
  name = null,
  image_url = null,
  price = null,
  description = null,
  is_available = null,
  type = null,
  token = null,
}) => {
  const dish = {
    restaurant_id,
    category_id,
    name,
    image_url,
    price,
    description,
    is_available,
    type,
  };

  return {
    type: EDIT_PRODUCT,
    dish,
    dish_id,
    token,
  };
};

export const deleteProduct = ({ dish_id, token }) => {
  return {
    type: DELETE_PRODUCT,
    dish_id,
    token,
  };
};

export const updateProductStatus = ({
  token = null,
  dish_id = null,
  is_available = null,
}) => {
  const dish = {
    dish_id,
    is_available,
  };
  console.log('action', dish);
  return {
    type: UPDATE_PRODUCT_STATUS,
    dish,
    token,
  };
};
