/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaList } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { MdRestaurantMenu } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';
import 'react-pro-sidebar/dist/css/styles.css';
import { useNavigate } from 'react-router-dom';
import {
  dashboardScreenPath,
  productScreenPath,
  profileSCreenPath,
  statisticsScreenPath,
} from '../../router/pathNames';

function SideBar() {
  const navigate = useNavigate();

  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  console.log(collapsed);

  return (
    <div
      className={`w-[${
        collapsed ? '10%' : '20%'
      }] mr-4 transition-all duration-300	`}>
      <ProSidebar
        style={{ position: 'fixed' }}
        image={false}
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
                console.log('shreehari');
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
              icon={<FaTachometerAlt />}>
              Dashboard
            </MenuItem>

            <MenuItem
              onClick={() => navigate(productScreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<MdRestaurantMenu />}>
              {' '}
              Products
            </MenuItem>

            <MenuItem
              onClick={() => navigate(statisticsScreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<BiStats />}>
              {' '}
              Statistics
            </MenuItem>

            <MenuItem
              onClick={() => navigate(profileSCreenPath)}
              style={{ margin: '5px', marginTop: '25px' }}
              icon={<RiAccountCircleFill />}>
              {' '}
              Profile
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default SideBar;
