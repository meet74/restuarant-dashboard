import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import ForgotPassword from '../auth/ForgetPassword';
import SentPage from '../auth/ForgetPassword/sentPage';
import LoginScreen from '../auth/Login';
import SignUpScreen from '../auth/SignUp';
import HomeScreen from '../core/Owner/Home';
import ProductScreen from '../core/Owner/Products';
import AddProductScreen from '../core/Owner/Products/AddProduct';
import ProductDetailScreen from '../core/Owner/Products/ProductDetailPage';
import ProfileScreen from '../core/Owner/Profile';
import RestaurantScreen from '../core/Owner/Restaurants';
import AddRestaurantScreen from '../core/Owner/Restaurants/AddRestaurant';
import RestaurantDetailScreen from '../core/Owner/Restaurants/RestaurantDetail';
import StatisticScreen from '../core/Owner/Statistics';
import { getAllRestaurants } from '../store/actions/restaurantAction';
import {
  addProductScreenPath,
  addRestaurantScreenPath,
  dashboardScreenPath,
  forgotPasswordEmailSentPath,
  forgotPasswordPath,
  homeScreenPath,
  loginPath,
  productDetailScreenPath,
  productScreenPath,
  profileSCreenPath,
  restaurantDetailScreenPath,
  restaurantsScreenPath,
  signupPath,
  statisticsScreenPath,
} from './pathNames';
//import { defaultPath } from './pathNames';

const RouterNav = () => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.auth);

  useEffect(() => {
    if (data.token) {
      dispatch(getAllRestaurants(data.token));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginPath} element={<LoginScreen />} />
        <Route path={signupPath} element={<SignUpScreen />} />
        <Route path={homeScreenPath}>
          <Route path={dashboardScreenPath} element={<HomeScreen />} />

          <Route path={productScreenPath} element={<ProductScreen />} />

          <Route path={addProductScreenPath} element={<AddProductScreen />} />
          <Route
            path={addRestaurantScreenPath}
            element={<AddRestaurantScreen />}
          />
          <Route
            path={restaurantDetailScreenPath}
            element={<RestaurantDetailScreen />}
          />
          <Route path={restaurantsScreenPath} element={<RestaurantScreen />} />
          <Route
            path={productDetailScreenPath}
            element={<ProductDetailScreen />}
          />
          <Route path={statisticsScreenPath} element={<StatisticScreen />} />
          <Route path={profileSCreenPath} element={<ProfileScreen />} />
        </Route>

        <Route path={forgotPasswordPath} element={<ForgotPassword />} />
        <Route path={forgotPasswordEmailSentPath} element={<SentPage />} />
        <Route
          path="/"
          element={
            <Navigate
              replace
              to={authData.token ? dashboardScreenPath : loginPath}
            />
          }
        />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterNav;
