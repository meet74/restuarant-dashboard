/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import SideBar from '../../../../components/SideBar.js';
import {
  IMAGENAMEOFRESTAURANT,
  RESTAURANTNAME,
} from '../../../../constants/index.js';
import { useLocation, useNavigate } from 'react-router-dom';
import DropDown from '../../../../components/Dropdown/index.js';
import { editRestaurant } from '../../../../store/actions/restaurantAction.js';

const foodImage = require('../../../../assets/images/food-1.jpg');

const RestaurantDetailScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authData = useSelector((state) => state.auth);

  const orderOptions = ['DELIVERY', 'PICKUP'];
  const statusOptions = ['OPENED', 'CLOSED'];
  const isVegOptions = ['Yes', 'No'];
  const isNonVegOptions = ['Yes', 'No'];
  const isPublishedptions = ['Yes', 'No'];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      RESTAURANTNAME: location.state ? location.state.restaurant.name : '',
      IMAGENAME: location.state ? location.state.restaurant.image_url : null,
    },
  });

  console.log(location.state.restaurant);
  const [onOrderOptionsDropDownSelect, setOrderOptionsOnDropDownSelect] =
    useState(
      location.state ? location.state.restaurant.order_options : orderOptions[0]
    );
  const [
    restaurantStatusOnDropDownSelect,
    setRestaurantStatusOnDropDownSelect,
  ] = useState(
    location.state ? location.state.restaurant.status : statusOptions[0]
  );
  const [isVegOptionsDropDownSelect, setIsVegOptionsOnDropDownSelect] =
    useState(
      location.state
        ? location.state.restaurant.is_veg === true
          ? 'Yes'
          : 'No'
        : isVegOptions[0]
    );
  const [isNonVegOnDropDownSelect, setIsNonVegOnDropDownSelect] = useState(
    location.state
      ? location.state.restaurant.is_non_veg === true
        ? 'Yes'
        : 'No'
      : isNonVegOptions[0]
  );
  const [isPublishedOnDropDownSelect, setIsPublishedOnDropDownSelect] =
    useState(
      location.state
        ? location.state.restaurant.is_published === true
          ? 'Yes'
          : 'No'
        : isPublishedptions[0]
    );

  const handleOrderOptionsDropdown = (value) => {
    setOrderOptionsOnDropDownSelect(value);
  };

  const handleRestaurantStatusDropdown = (value) => {
    setRestaurantStatusOnDropDownSelect(value);
  };

  const handleIsVegDropdown = (value) => {
    setIsVegOptionsOnDropDownSelect(value);
  };

  const handleIsNonVegDropdown = (value) => {
    setIsNonVegOnDropDownSelect(value);
  };

  const handleIsPublishedDropdown = (value) => {
    setIsPublishedOnDropDownSelect(value);
  };
  console.log(restaurantStatusOnDropDownSelect);
  const onSubmit = (data) => {
    dispatch(
      editRestaurant({
        restaurant_id: location.state ? location.state.restaurant.id : null,
        name: data.RESTAURANTNAME,
        image_url: foodImage,
        status: restaurantStatusOnDropDownSelect.value,
        is_published: isPublishedOnDropDownSelect === 'Yes' ? true : false,
        order_options: onOrderOptionsDropDownSelect,
        is_veg: isVegOptionsDropDownSelect === 'Yes' ? true : false,
        is_non_veg: isNonVegOnDropDownSelect === 'Yes' ? true : false,
        token: authData.token,
      })
    );
    navigate(-1);
  };

  return (
    <div className="h-screen flex overflow-scroll 	bg-backgroundSecondary">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col ">
          <span className="my-4 font-display font-extrabold text-2xl">
            Edit Restaurant
          </span>
          <div className="flex flex-1 flex-col justify-center mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="font-display font-medium ">
                Name of Restaurant :
              </label>
              <br />
              <input
                {...register(RESTAURANTNAME, { required: true })}
                placeholder="Name"
                className={`font-display border w-[50%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                type="text"
                required={true}
              />
              <br />

              <label className="font-display font-medium">Image:</label>
              <br />
              <input
                className={`font-display border w-[50%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                {...register(IMAGENAMEOFRESTAURANT)}
                type="file"
              />
              <br />

              <label className="font-display font-medium">Status :</label>
              <br />

              <DropDown
                options={statusOptions}
                onChange={handleRestaurantStatusDropdown}
                value={restaurantStatusOnDropDownSelect}
              />
              <br />

              <label className="font-display font-medium">
                Restuarant is published :
              </label>
              <br />

              <DropDown
                options={isPublishedptions}
                onChange={handleIsPublishedDropdown}
                value={isPublishedOnDropDownSelect}
              />
              <br />

              <label className="font-display font-medium">
                Order options :
              </label>
              <br />

              <DropDown
                options={orderOptions}
                onChange={handleOrderOptionsDropdown}
                value={onOrderOptionsDropDownSelect}
              />
              <br />

              <label className="font-display font-medium">Vegetarian :</label>
              <br />

              <DropDown
                options={isVegOptions}
                onChange={handleIsVegDropdown}
                value={isVegOptionsDropDownSelect}
              />

              <br />
              <label className="font-display font-medium">
                Non-Vegetarian :
              </label>
              <br />

              <DropDown
                options={isNonVegOptions}
                onChange={handleIsNonVegDropdown}
                value={isNonVegOnDropDownSelect}
              />
              <br />

              <input
                className={`font-display border w-[50%] bg-primary text-white cursor-pointer rounded-md block  my-6 mt-8 p-4 text-lg `}
                type={'submit'}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailScreen;
