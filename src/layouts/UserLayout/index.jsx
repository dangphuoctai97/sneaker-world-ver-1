import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Spin } from "antd";

import Header from "../User/Header";
import Footer from "../Footer";

import * as S from "./styles";

export default function UserLayout() {
  const [sticky, setSticky] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const { userInfo } = useSelector((state) => state.user);

  const setHeader = () => {
    if (window.scrollY > 400) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", setHeader);

  return (
    <>
      <Header sticky={sticky} setSticky={setSticky} />
      {accessToken && userInfo.loading ? (
        <S.LoadingWrapper>
          <Spin size="large" />
        </S.LoadingWrapper>
      ) : (
        <>
          <S.MainContainer sticky={sticky}>
            <S.MainContent>
              <Outlet />
            </S.MainContent>
          </S.MainContainer>
          <Footer />
        </>
      )}
    </>
  );
}
