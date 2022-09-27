import { ADD_PRODUCT } from '../constant';

const initialState = {
  restaurant_id: null,
  category_id: null,
  name: null,
  image_url: null,
  price: null,
  description: null,
  is_available: null,
  type: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        restaurant_id: action.dish.restaurant_id,
        category_id: action.dish.category_id,
        name: action.dish.name,
        image_url: action.dish.image_url,
        price: action.dish.price,
        description: action.dish.description,
        is_available: action.dish.is_available,
        type: action.dish.type,
      };

    default:
      return state;
  }
};
