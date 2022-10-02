/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../../components/Header/index.js';
import ProductCard from '../../../components/ProductCard/index.js';
import SideBar from '../../../components/SideBar.js';
import { MdRestaurantMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  addProductScreenPath,
  productDetailScreenPath,
} from '../../../router/pathNames.js';
import IconButton from '../../../components/Button/IconButton.js';
import { getProduct } from '../../../store/actions/productAction.js';
//import { dummyData } from '../../../constants/dummyData.js';

const foodImage = require('../../../assets/images/food-1.jpg');

const ProductScreen = () => {
  // const data = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);
  const productData = useSelector((state) => state.product);
  const restaurantData = useSelector((state) => state.restaurant);

  const usenavigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(restaurantData.restaurant, authData.token));
  }, [restaurantData]);

  return (
    <div className="h-screen flex overflow-scroll bg-backgroundSecondary">
      <SideBar />
      <div className="flex flex-col w-screen ml-14">
        {restaurantData.allRestaurants.length ? (
          <div className="flex flex-2">
            <Header profileName="Admin" />
          </div>
        ) : (
          <div className="flex flex-2">
            <Header
              headerTitle="Please add Restaurants first"
              profileName="Admin"
              showSearchBar={false}
              showTime={false}
              showIcon={false}
              showRestaurantDropdown={false}
              showHeaderTitle={false}
            />
          </div>
        )}

        {restaurantData.allRestaurants.length ? (
          <div className="flex flex-col  flex-1 ">
            <div className="flex justify-between ">
              <span className=" font-display font-extrabold text-2xl">
                Main Courses
              </span>
              <IconButton
                icon={<MdRestaurantMenu className="mr-4" />}
                titleText="Add Product"
                onClick={() => usenavigate(addProductScreenPath)}
              />
            </div>
            {productData.dishes.length ? (
              <div className="grid grid-cols-none md:grid-cols-2  xl:grid-cols-4 ">
                {productData.dishes.map((dish, index) => {
                  return (
                    <ProductCard
                      onCardClick={() =>
                        usenavigate(productDetailScreenPath, {
                          state: { dish },
                        })
                      }
                      dish_id={dish.id}
                      is_available={dish.is_available}
                      key={index}
                      dishName={dish.name}
                      image={foodImage}
                      price={dish.price}
                      totalDishesAvailable={'11'}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex  flex-1 items-center  justify-center">
                <span className="font-display font-extrabold text-3xl">
                  No Products found!!!
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex  flex-1 items-center  justify-center">
            <span className="font-display font-extrabold text-3xl">
              No Restaurants found!!!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
