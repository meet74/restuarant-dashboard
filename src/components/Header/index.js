/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import ReactSwitch from 'react-switch';
import Input from '../../components/Input';
import { primary } from '../../constants';
import {
  getAllRestaurants,
  setRestaurant,
  updateRestaurantStatus,
} from '../../store/actions/restaurantAction';

import DropDown from '../Dropdown';

function Header({
  showRestaurantDropdown = true,
  headerTitle = '',
  profileName = '',
  showSearchBar = true,
  showTime = true,
  showHeaderTitle = true,
}) {
  const restaurantData = useSelector((state) => state.restaurant);
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let options = restaurantData.restaurantNames.length
    ? restaurantData.restaurantNames
    : ['No Restaurants Found'];
  const [onDropDownSelect, setOnDropDownSelect] = useState(options[0]);
  const [checked, setChecked] = useState(
    restaurantData.restaurant.status === 'OPENED' ? true : false
  );

  const handleDropdown = (value) => {
    const restaurant = restaurantData.allRestaurants.find(
      (res) => res.name === value.value
    );
    dispatch(setRestaurant(restaurant));

    setOnDropDownSelect(value.value);
  };

  const handleSwitch = (checked) => {
    dispatch(
      updateRestaurantStatus({
        token: authData.token,
        is_published: true,
        restaurant_id: restaurantData.restaurant.id,
        status: checked ? 'OPENED' : 'CLOSED',
      })
    );
    setChecked(checked);
  };
  useEffect(() => {
    let tempRestaurant = restaurantData.allRestaurants.find(
      (res) => res.name === onDropDownSelect
    );

    if (tempRestaurant) {
      dispatch(setRestaurant(tempRestaurant));
      setChecked(restaurantData.restaurant.status === 'OPENED' ? true : false);
    }
  }, [onDropDownSelect]);

  useEffect(() => {
    dispatch(getAllRestaurants(authData.token));
    setChecked(restaurantData.restaurant.status === 'OPENED' ? true : false);
    setOnDropDownSelect(restaurantData.restaurantNames[0]);
  }, [restaurantData.restaurantNames.length]);
  return (
    <div className="flex flex-1 flex-col">
      {showRestaurantDropdown && (
        <div className="w-[40%] m-4">
          <label className="font-display font-medium m-1">
            Select Restaurant
          </label>
          <DropDown
            options={options}
            onChange={handleDropdown}
            value={onDropDownSelect}
          />
        </div>
      )}
      <div className="flex flex-row justify-between  ">
        <div className="flex flex-col">
          {headerTitle === '' ? (
            <span className="font-extrabold mt-8 text-3xl flex items-center justify-center">
              {onDropDownSelect} is{' '}
              {restaurantData.restaurant.status === 'OPENED' ? 'Open' : 'Close'}
              <div className="m-2 mt-4">
                <ReactSwitch
                  onColor={primary}
                  offColor="#ff0000"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  checked={checked}
                  onChange={handleSwitch}
                />
              </div>
            </span>
          ) : (
            showHeaderTitle && (
              <span className="font-extrabold mt-8 text-3xl flex items-center">
                {headerTitle}
              </span>
            )
          )}
          {showTime && (
            <span className="mt-2 font-display font-thin">
              {new Date(Date.now()).toUTCString()}
            </span>
          )}
        </div>

        <div className="flex m-8">
          <span className="font-display font-medium m-2">{profileName}</span>
          <BsFillBellFill color="#3b9b5c" style={{ margin: '8px' }} size={20} />
        </div>
      </div>
      {showSearchBar && (
        <Input
          className="bg-backgroundSecondary"
          width="w-[25%]"
          placeholder="Search"
        />
      )}
    </div>
  );
}

export default Header;
