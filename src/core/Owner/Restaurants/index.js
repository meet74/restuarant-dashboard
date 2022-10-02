/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '../../../components/Button/IconButton.js';
import Header from '../../../components/Header/index.js';
import SideBar from '../../../components/SideBar.js';
import RestaurantCard from '../../../components/RestaurantCard/index.js';
import { BiRestaurant } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import {
  addRestaurantScreenPath,
  restaurantDetailScreenPath,
} from '../../../router/pathNames.js';

const foodImage = require('../../../assets/images/food-1.jpg');

const RestaurantScreen = () => {
  const restaurantData = useSelector((state) => state.restaurant);

  const usenavigate = useNavigate();
  return (
    <div className="h-screen flex bg-backgroundSecondary overflow-scroll">
      <SideBar />
      <div className="flex flex-col w-screen ml-14">
        <div className="flex flex-2">
          <Header
            headerTitle="Your Restaurants"
            profileName="Admin"
            showRestaurantDropdown={false}
            showIcon={false}
          />
        </div>
        <IconButton
          icon={<BiRestaurant size={'22px'} />}
          titleText="Add Restuarant"
          width="w-[40%]"
          extraButtonContainer="self-end"
          onClick={() => usenavigate(addRestaurantScreenPath)}
        />
        <div className="flex flex-1 flex-col my-4">
          {restaurantData.allRestaurants.length ? (
            restaurantData.allRestaurants.map((res, index) => {
              return (
                <RestaurantCard
                  onClick={() =>
                    usenavigate(restaurantDetailScreenPath, {
                      state: { restaurant: res },
                    })
                  }
                  key={index}
                  image={foodImage}
                  restaurantName={res.name}
                />
              );
            })
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <span className="font-semibold text-3xl ">
                No Restaurants Found!!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantScreen;
