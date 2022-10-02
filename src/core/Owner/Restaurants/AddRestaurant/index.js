/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import SideBar from '../../../../components/SideBar.js';
import {
  IMAGENAMEOFRESTAURANT,
  RESTAURANTNAME,
} from '../../../../constants/index.js';
import { useNavigate } from 'react-router-dom';
import DropDown from '../../../../components/Dropdown/index.js';
import { addRestaurants } from '../../../../store/actions/restaurantAction.js';

const foodImage = require('../../../../assets/images/food-1.jpg');

const AddRestaurantScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth);

  const orderOptions = ['DELIVERY', 'PICKUP'];
  const statusOptions = ['OPENED', 'CLOSED'];
  const isVegOptions = ['Yes', 'No'];
  const isNonVegOptions = ['Yes', 'No'];
  const isPublishedptions = ['Yes', 'No'];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      RESTAURANTNAME: '',
      IMAGENAME: null,
    },
  });

  const [onOrderOptionsDropDownSelect, setOrderOptionsOnDropDownSelect] =
    useState(orderOptions[0]);
  const [
    restaurantStatusOnDropDownSelect,
    setRestaurantStatusOnDropDownSelect,
  ] = useState(statusOptions[0]);
  const [isVegOptionsDropDownSelect, setIsVegOptionsOnDropDownSelect] =
    useState(isVegOptions[0]);
  const [isNonVegOnDropDownSelect, setIsNonVegOnDropDownSelect] = useState(
    isNonVegOptions[0]
  );
  const [isPublishedOnDropDownSelect, setIsPublishedOnDropDownSelect] =
    useState(isPublishedptions[0]);

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

  const onSubmit = (data) => {
    dispatch(
      addRestaurants({
        name: data.RESTAURANTNAME,
        image_url: foodImage,
        status: restaurantStatusOnDropDownSelect,
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
            Add Restaurant
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

export default AddRestaurantScreen;
