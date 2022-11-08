import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

import LoginLayout from "./layouts/LoginLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import AdminHomePage from "./pages/Admin/HomePage";
import AdminProductListPage from "./pages/Admin/ProductListPage";
import AdminCreateProductPage from "./pages/Admin/CreateProductPage";
import AdminUpdateProductPage from "./pages/Admin/UpdateProductPage";

import UserHomePage from "./pages/User/HomePage";
import AboutPage from "./pages/User/AboutPage";
import BlogPage from "./pages/User/BlogPage";
import CheckoutPage from "./pages/User/CheckoutPage";
import UserProductListPage from "./pages/User/ProductListPage";
import ProductDetailPage from "./pages/User/ProductDetailPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { ROUTES } from "./constants/routes";
import { getUserInfoAction } from "./redux/actions/";

import * as S from "./styles";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const decodeInfo = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: decodeInfo.sub }));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <S.GlobalContainer>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route
            path={ROUTES.ADMIN.DASHBOARD}
            element={<AdminHomePage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.PRODUCT_LIST}
            element={<AdminProductListPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.CREATE_PRODUCT}
            element={<AdminCreateProductPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.UPDATE_PRODUCT}
            element={<AdminUpdateProductPage />}
          ></Route>
        </Route>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<UserHomePage />}></Route>
          <Route path={ROUTES.USER.ABOUT} element={<AboutPage />}></Route>
          <Route path={ROUTES.USER.Blog} element={<BlogPage />}></Route>
          <Route path={ROUTES.USER.CHECKOUT} element={<CheckoutPage />}></Route>
          <Route
            path={ROUTES.USER.PRODUCT_LIST}
            element={<UserProductListPage />}
          ></Route>
          <Route
            path={ROUTES.USER.PRODUCT_DETAILS}
            element={<ProductDetailPage />}
          ></Route>
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </S.GlobalContainer>
  );
}

export default App;
