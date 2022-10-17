import { Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import LoginLayout from "./layouts/LoginLayout";
import AdminHomePage from "./pages/Admin/HomePage";
import UserHomePage from "./pages/User/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminProductListPage from "./pages/Admin/ProductListPage";
import UserProductListPage from "./pages/User/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import { ROUTES } from "./constants/routes";

import * as S from "./styles";

function App() {
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
        </Route>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<UserHomePage />}></Route>
          <Route path={ROUTES.USER.ABOUT} element={<AboutPage />}></Route>
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
