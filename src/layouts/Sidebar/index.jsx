import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { SIDEBAR_ITEMS } from "./constants";
import * as S from "./styles";

function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          $active={pathname === item.path}
        >
          {item.icon}
          {item.title}
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarContainer>
      <S.SidebarContent>{renderSidebarItems()}</S.SidebarContent>
    </S.SidebarContainer>
  );
}

export default Sidebar;
