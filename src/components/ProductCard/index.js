/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSwitch from 'react-switch';
import { primary } from '../../constants';
import { updateProductStatus } from '../../store/actions/productAction';

function ProductCard({
  image,
  dishName,
  price,
  onCardClick,
  is_available,
  dish_id,
}) {
  const authData = useSelector((state) => state.auth);

  const [checked, setChecked] = useState(is_available);
  const dispatch = useDispatch();
  const handleSwitch = (checked) => {
    dispatch(
      updateProductStatus({
        token: authData.token,
        dish_id: dish_id,
        is_available: checked,
      })
    );
    setChecked(checked);
  };

  return (
    <div className="flex items-center justify-center m-4 rounded-3xl drop-shadow-lg  flex-col  bg-backgroundSecondary border border-secondary">
      <div
        onClick={onCardClick}
        className="flex items-center justify-center cursor-pointer	 flex-col">
        <img
          src={image}
          className="p-8  rounded-[50%]  h-60 object-cover overflow-hidden"
        />
        <span className="text-black font-medium text-xl">{dishName}</span>
        <span className="text-black font-light my-2">${price}</span>
      </div>
      <div className="my-4 flex items-center">
        <span className="text-black font-medium my-2 mr-4">
          {checked ? 'Available' : 'Out of Stock'}
        </span>
        <ReactSwitch
          onColor={primary}
          offColor="#ff0000"
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked}
          onChange={handleSwitch}
        />
      </div>
    </div>
  );
}

export default ProductCard;
