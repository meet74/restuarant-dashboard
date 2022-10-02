import {
  SET_EDITED_RESTAURANT_DATA,
  SET_RECIEVED_ALL_RESTAURANT_DATA,
  SET_RESTAURANTS_DATA,
  SET_RESTAURANT_DATA,
  SET_UPDATED_RESTAURANT_STATUS,
} from '../constant';

const initialState = {
  allRestaurants: [],
  restaurant: {
    id: 0,
    name: null,
    image_url: null,
    status: null,
    is_published: null,
    order_options: null,
    is_veg: null,
    is_non_veg: null,
  },
  restaurantNames: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS_DATA: {
      const restaurant = {
        id: action.id,
        name: action.name,
        image_url: action.image_url,
        status: action.status,
        is_published: action.is_published,
        order_options: action.order_options,
        is_veg: action.is_veg,
        is_non_veg: action.is_non_veg,
      };
      const allRestaurantsCopy = [...state.allRestaurants];
      allRestaurantsCopy.push(restaurant);
      const allRestaurantNamesCopy = [...state.restaurantNames];
      allRestaurantNamesCopy.push(action.name);
      return {
        ...state,
        allRestaurants: allRestaurantsCopy,
        restaurant: restaurant,
        restaurantNames: allRestaurantNamesCopy,
      };
    }
    case SET_EDITED_RESTAURANT_DATA: {
      const oldRestaurants = [...state.allRestaurants];
      const restaurantIndex = oldRestaurants.findIndex(
        (res) => res.id === action.restaurant_id
      );
      const updatedRestaurant = {
        id: action.restaurant_id,
        name: action.name,
        image_url: action.image_url,
        status: action.status,
        is_published: action.is_published,
        order_options: action.order_options,
        is_veg: action.is_veg,
        is_non_veg: action.is_non_veg,
      };
      console.log('reducer', action);
      oldRestaurants[restaurantIndex] = updatedRestaurant;

      return {
        ...state,
        allRestaurants: oldRestaurants,
        restaurant: updatedRestaurant,
      };
    }
    case SET_RECIEVED_ALL_RESTAURANT_DATA: {
      let allRestaurantsCopy = action.allRestaurants;
      let restaurantNames = [];
      action.allRestaurants.map((res) => {
        restaurantNames.push(res.name);
      });
      return {
        ...state,
        allRestaurants: allRestaurantsCopy,
        restaurant: allRestaurantsCopy[0],
        restaurantNames: restaurantNames,
      };
    }
    case SET_RESTAURANT_DATA: {
      return {
        ...state,
        restaurant: action.restaurant,
      };
    }
    case SET_UPDATED_RESTAURANT_STATUS: {
      const oldRestaurants = [...state.allRestaurants];
      const restaurantIndex = oldRestaurants.findIndex(
        (res) => res.id === action.restaurant_id
      );
      const updatedRestaurant = {
        id: action.restaurant_id,
        name: state.allRestaurants[restaurantIndex].name,
        image_url: state.allRestaurants[restaurantIndex].image_url,
        status: action.status,
        is_published: action.is_published,
        order_options: state.allRestaurants[restaurantIndex].order_options,
        is_veg: state.allRestaurants[restaurantIndex].is_veg,
        is_non_veg: state.allRestaurants[restaurantIndex].is_non_veg,
      };
      console.log('reducer', updatedRestaurant);
      oldRestaurants[restaurantIndex] = updatedRestaurant;
      return {
        ...state,
        allRestaurants: oldRestaurants,
        restaurant: updatedRestaurant,
      };
    }
    default:
      return state;
  }
};
