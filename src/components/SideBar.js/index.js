/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaList } from 'react-icons/fa';
import { BiStats, BiRestaurant } from 'react-icons/bi';
import { MdRestaurantMenu } from 'react-icons/md';
import { BsPower } from 'react-icons/bs';
import { RiAccountCircleFill } from 'react-icons/ri';
import 'react-pro-sidebar/dist/css/styles.css';
import { useNavigate } from 'react-router-dom';
import {
  dashboardScreenPath,
  loginPath,
  productScreenPath,
  profileSCreenPath,
  restaurantsScreenPath,
  statisticsScreenPath,
} from '../../router/pathNames';
import './custom.scss';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

// const foodImage = require('../../assets/images/food-1.jpg');

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const logOutHandler = () => {
    dispatch(logOut());
    navigate(loginPath);
  };

  return (
    <div
      className={`${
        collapsed ? 'w-[5%]' : 'w-[20%]'
      } mr-4 transition-all duration-300 bg-backgroundSecondary	`}>
      <ProSidebar
        style={{ position: 'fixed' }}
        color="green"
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}>
        <SidebarHeader style={{ cursor: 'pointer' }}>
          <div className="flex flex-row items-center justify-center p-3">
            {!collapsed && (
              <div
                onClick={() => navigate(dashboardScreenPath)}
                style={{
                  padding: '24px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: '1px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                Restaurant Admin
              </div>
            )}
            <FaList
              style={{ margin: '4px', cursor: 'pointer' }}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              onClick={() => navigate(dashboardScreenPath)}
              style={{ margin: '5px' }}
              icon={<FaTachometerAlt size={'22px'} />}>
              <span className="text-base">Dashboard</span>
            </MenuItem>

            <MenuItem
              onClick={() => navigate(restaurantsScreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<BiRestaurant size={'22px'} />}>
              {' '}
              <span className="text-base">Restaurants</span>
            </MenuItem>

            <MenuItem
              onClick={() => navigate(productScreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<MdRestaurantMenu size={'22px'} />}>
              {' '}
              <span className="text-base">Products</span>
            </MenuItem>

            <MenuItem
              onClick={() => navigate(statisticsScreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<BiStats size={'22px'} />}>
              {' '}
              <span className="text-base">Statistics</span>
            </MenuItem>

            <MenuItem
              onClick={() => navigate(profileSCreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<RiAccountCircleFill size={'22px'} />}>
              {' '}
              <span className="text-base">Profile</span>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            onClick={logOutHandler}
            className="whitespace-nowrap text-ellipsis overflow-hidden flex items-center justify-center p-5 cursor-pointer">
            {!collapsed && (
              <span className="mr-4 font-display font-medium">Log Out</span>
            )}
            <BsPower />
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default SideBar;
