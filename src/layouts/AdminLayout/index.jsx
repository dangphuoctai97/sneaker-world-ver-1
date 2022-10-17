import { Outlet } from "react-router-dom";

import Header from "../Admin/Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import * as S from "./styles";

export default function AdminLayout() {
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
