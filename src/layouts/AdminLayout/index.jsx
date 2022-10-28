import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spin } from "antd";

import Header from "../Admin/Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

export default function AdminLayout() {
  const accessToken = localStorage.getItem("accessToken");
  const { userInfo } = useSelector((state) => state.user);

  if (accessToken && userInfo.loading) {
    return (
      <S.LoadingWrapper>
        <Spin size="large" />
      </S.LoadingWrapper>
    );
  } else if (userInfo.data.role !== "admin")
    return <Navigate to={ROUTES.USER.HOME} />;
  return (
    <>
      <Header />
      <S.MainContainer>
        <Sidebar />
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
      <Footer />
    </>
  );
}
