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
import StatisticScreen from '../core/Owner/Statistics';
import {
  addProductScreenPath,
  dashboardScreenPath,
  forgotPasswordEmailSentPath,
  forgotPasswordPath,
  homeScreenPath,
  loginPath,
  productDetailScreenPath,
  productScreenPath,
  profileSCreenPath,
  signupPath,
  statisticsScreenPath,
} from './pathNames';
//import { defaultPath } from './pathNames';

const RouterNav = () => {
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
          element={<Navigate replace to={dashboardScreenPath} />}
        />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterNav;
