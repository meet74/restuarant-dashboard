import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import SideBar from '../../../../components/SideBar.js';
import {
  DESCRIPTION,
  IMAGENAME,
  PRICE,
  PRODUCTNAME,
} from '../../../../constants/index.js';
import {
  deleteProduct,
  editProduct,
} from '../../../../store/actions/productAction.js';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '../../../../components/Button/IconButton.js';
import DropDown from '../../../../components/Dropdown/index.js';
import { productScreenPath } from '../../../../router/pathNames.js';

const foodImage = require('../../../../assets/images/food-1.jpg');

const ProductDetailScreen = () => {
  const options = ['VEG', 'NON-VEG'];
  const availabaleOptions = ['Yes', 'No'];
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authData = useSelector((state) => state.auth);

  const [onDropDownSelect, setOnDropDownSelect] = useState(
    location.state ? location.state.dish.type : options[0]
  );

  const [onAvailableDropDownSelect, setOnAvailableDropDownSelect] = useState(
    location.state
      ? location.state.dish.is_available
        ? 'Yes'
        : 'No'
      : options[0]
  );

  const handleDropdown = (value) => {
    setOnDropDownSelect(value);
  };

  const handleIsAvailableDropdown = (value) => {
    setOnAvailableDropDownSelect(value.value);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      PRODUCTNAME: location.state ? location.state.dish.name : '',
      IMAGENAME: null,
      PRICE: location.state ? location.state.dish.price : '',
      DESCRIPTION: location.state ? location.state.dish.description : '',
    },
  });

  const onSubmit = (data) => {
    dispatch(
      editProduct({
        dish_id: location.state.dish.id,
        restaurant_id: location.state.dish.restaurant_id,
        category_id: 0,
        is_available: onAvailableDropDownSelect === 'Yes' ? true : false,
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

  const onDelete = () => {
    dispatch(
      deleteProduct({
        dish_id: location.state.dish.id,
        token: authData.token,
      })
    );
    navigate(productScreenPath);
  };
  return (
    <div className="h-screen flex overflow-scroll 	bg-backgroundSecondary">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col ">
          <span className="my-4 font-display font-extrabold text-2xl">
            Edit Product
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
                className={`font-display border w-[40%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                type="text"
                required={true}
              />
              <br />

              <label className="font-display font-medium">Image:</label>
              <br />
              <input
                className={`font-display border w-[40%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                {...register(IMAGENAME)}
                type="file"
              />
              <br />

              <label className="font-display font-medium">Price:</label>
              <br />
              <input
                className={`font-display border w-[40%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
                placeholder="Price"
                {...register(PRICE)}
                type="text"
                required={true}
              />
              <br />

              <label className="font-display font-medium">
                Availablity of Dish
              </label>
              <br />
              <DropDown
                options={availabaleOptions}
                onChange={handleIsAvailableDropdown}
                value={onAvailableDropDownSelect}
              />
              <br />

              <label className="font-display font-medium">Descritption:</label>
              <br />
              <input
                className={`font-display border w-[40%] rounded-md block  my-6 mt-8 p-4 text-lg bg-backgroundSecondary`}
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

              <div className="flex items-center justify-center mt-4">
                <input
                  className={`font-display border w-[40%] bg-primary text-white cursor-pointer rounded-md block  my-6 mt-8 p-4 text-lg `}
                  type={'submit'}
                />
                <IconButton
                  titleText="Delete"
                  backgroundColor="bg-red"
                  width="w-[40%]"
                  extraButtonContainer="rounded-md  self-center"
                  onClick={onDelete}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
