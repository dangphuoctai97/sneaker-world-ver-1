import { Outlet } from "react-router-dom";

import Header from "../User/Header";
import Footer from "../Footer";

import * as S from "./styles";

export default function UserLayout() {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
      <Footer />
    </>
  );
}
