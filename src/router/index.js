import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import LoginScreen from '../auth/Login';
import SignUpScreen from '../auth/SignUp';
import HomeScreen from '../core/Owner/Home';
import { homeScreenPath, loginPath, signupPath } from './pathNames';
//import { defaultPath } from './pathNames';

const RouterNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginPath} element={<LoginScreen />} />
        <Route path={signupPath} element={<SignUpScreen />} />
        <Route path={homeScreenPath} element={<HomeScreen />} />
        <Route path="/" element={<Navigate replace to={loginPath} />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterNav;
