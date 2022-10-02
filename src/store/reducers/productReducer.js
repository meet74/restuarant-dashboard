import {
  SET_DELETED_PRODUCT_DATA,
  SET_EDITED_PRODUCT_DATA,
  SET_PRODUCT_DATA,
  SET_RECIEVED_PRODUCTS_DATA,
  SET_UPDATED_PRODUCT_STATUS,
} from '../constant';

const initialState = {
  dishes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIEVED_PRODUCTS_DATA: {
      return {
        ...state,
        dishes: action.dishes,
      };
    }

    case SET_PRODUCT_DATA: {
      if (action.restaurant_id) {
        const newDish = {
          dish_id: action.dish_id,
          restaurant_id: action.restaurant_id,
          category_id: action.category_id,
          name: action.name,
          image_url: action.image_url,
          price: action.price,
          description: action.description,
          is_available: action.is_available,
          type: action.type,
        };

        const oldDishes = [...state.dishes];

        oldDishes.push(newDish);
        console.log('oldDIsh', oldDishes);
        return {
          ...state,
          dishes: oldDishes,
        };
      } else {
        return state;
      }
    }
    case SET_EDITED_PRODUCT_DATA: {
      const updatedDish = {
        dish_id: action.dish_id,
        restaurant_id: action.restaurant_id,
        category_id: action.category_id,
        name: action.name,
        image_url: action.image_url,
        price: action.price,
        description: action.description,
        is_available: action.is_available,
        type: action.type,
      };

      const oldDishes = [...state.dishes];
      const dishIndex = oldDishes.findIndex(
        (dish) => dish.id === action.dish_id
      );
      oldDishes[dishIndex] = updatedDish;

      return {
        ...state,
        dishes: oldDishes,
      };
    }
    case SET_DELETED_PRODUCT_DATA: {
      const oldDishes = [...state.dishes];
      const newDishes = oldDishes.filter((dish) => dish.id !== action.dish_id);
      return {
        ...state,
        dishes: newDishes,
      };
    }
    case SET_UPDATED_PRODUCT_STATUS: {
      const oldDishes = [...state.dishes];
      const dishIndex = oldDishes.findIndex(
        (dish) => dish.id === action.dish_id
      );
      const updatedDish = {
        dish_id: action.dish_id,
        restaurant_id: action.restaurant_id,
        category_id: state.dishes[dishIndex].category_id,
        name: state.dishes[dishIndex].name,
        image_url: state.dishes[dishIndex].image_url,
        price: state.dishes[dishIndex].price,
        is_available: action.is_available,
        type: state.dishes[dishIndex].type,
        description: state.dishes[dishIndex].description,
      };
      console.log('reducer', updatedDish);
      oldDishes[dishIndex] = updatedDish;
      return {
        ...state,
        dishes: oldDishes,
      };
    }
    default:
      return state;
  }
};
