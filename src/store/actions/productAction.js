import { ADD_PRODUCT } from '../constant';

export const addProduct = ({
  restaurant_id = null,
  category_id = null,
  name = null,
  image_url = null,
  price = null,
  description = null,
  is_available = null,
  type = null,
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
  };
};
