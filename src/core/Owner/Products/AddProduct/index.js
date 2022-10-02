/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import SideBar from '../../../../components/SideBar.js';
import {
  DESCRIPTION,
  IMAGENAME,
  PRICE,
  PRODUCTNAME,
  TOTALDISHES,
} from '../../../../constants/index.js';
import { addProduct } from '../../../../store/actions/productAction.js';
import { useNavigate } from 'react-router-dom';
import DropDown from '../../../../components/Dropdown/index.js';

const foodImage = require('../../../../assets/images/food-1.jpg');

const AddProductScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authData = useSelector((state) => state.auth);
  const restaurantData = useSelector((state) => state.restaurant);

  const options = ['VEG', 'NON-VEG'];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      PRODUCTNAME: '',
      IMAGENAME: null,
      PRICE: '',
      TOTALDISHES: '',
      DESCRIPTION: '',
    },
  });

  const [onDropDownSelect, setOnDropDownSelect] = useState(options[0]);

  const handleDropdown = (value) => {
    setOnDropDownSelect(value.value);
  };

  const onSubmit = (data) => {
    console.log(onDropDownSelect);
    dispatch(
      addProduct({
        restaurant_id: restaurantData.restaurant.id,
        category_id: 0,
        is_available: true,
        name: data.PRODUCTNAME,
        description: data.DESCRIPTION,
        image_url: foodImage,
        price: data.PRICE,
        type: onDropDownSelect,
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
            Add Product
          </span>
          <div className="flex flex-1 flex-col justify-center mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="font-display font-medium ">
                Name of Product :
              </label>
              <br />
              <input
                {...register(PRODUCTNAME, { required: true })}
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
                {...register(IMAGENAME)}
                type="file"
              />
              <br />

              <label className="font-display font-medium">Price:</label>
              <br />
              <input
                className={`font-display border w-[50%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                placeholder="Price"
                {...register(PRICE)}
                type="text"
                required={true}
              />
              <br />

              <label className="font-display font-medium">Total Dishes:</label>
              <br />
              <input
                className={`font-display border w-[50%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                placeholder="Total Dishes"
                {...register(TOTALDISHES)}
                type="number"
                required={true}
              />
              <br />

              <label className="font-display font-medium">Descritption:</label>
              <br />
              <input
                className={`font-display border w-[50%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                placeholder="Descruption"
                {...register(DESCRIPTION)}
                required={true}
              />
              <br />

              <label className="font-display font-medium">Type of Dish :</label>
              <br />

              <DropDown
                options={options}
                onChange={handleDropdown}
                value={onDropDownSelect}
              />

              <br />

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

export default AddProductScreen;
