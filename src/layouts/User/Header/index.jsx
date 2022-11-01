import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Menu, Button, Badge, Avatar, Image } from "antd";
import {
  ShoppingCartOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { ROUTES } from "../../../constants/routes";
import { logoutAction } from "../../../redux/actions";
import * as S from "./styles";
import { Fragment } from "react";

export default function Header(props) {
  const { sticky } = props;
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  const menu = (
    <Menu
      items={[
        userInfo.data.role === "admin" && {
          key: "dashboard",
          label: (
            <Link to={ROUTES.ADMIN.DASHBOARD}>
              <span style={{ color: "royalblue" }}>Go dashboard</span>
            </Link>
          ),
          icon: <DashboardOutlined style={{ color: "royalblue" }} />,
        },
        {
          key: "logout",
          label: (
            <Link to={null} onClick={() => dispatch(logoutAction())}>
              <span>Đăng xuất</span>
            </Link>
          ),
          icon: <LogoutOutlined />,
          danger: true,
        },
      ]}
    />
  );

  return (
    <S.HeaderContainer sticky={sticky}>
      <S.HeaderContent>
        {/* <S.MobileMenu></S.MobileMenu> */}
        <div className="navBarLogo">
          <span>
            <Link to={ROUTES.USER.HOME}>SneakerWorld</Link>
          </span>
        </div>
        <S.NavBar>
          <ul>
            <li>
              <S.HeaderItem to={ROUTES.USER.HOME} $active={pathname === "/"}>
                <span>Trang chủ</span>
              </S.HeaderItem>
            </li>
            <li>
              <S.HeaderItem
                to={ROUTES.USER.PRODUCT_LIST}
                $active={pathname === "/products"}
              >
                <span>Sản phẩm</span>
              </S.HeaderItem>
            </li>
            <li>
              <S.HeaderItem
                to={ROUTES.USER.Blog}
                $active={pathname === "/blog"}
              >
                <span>Bài viết</span>
              </S.HeaderItem>
            </li>
            <li>
              <S.HeaderItem
                to={ROUTES.USER.ABOUT}
                $active={pathname === "/about"}
              >
                <span>Liên hệ</span>
              </S.HeaderItem>
            </li>
          </ul>
        </S.NavBar>
        <S.ButtonContainer>
          <S.CartBtn>
            <Badge count={null} size="small">
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                onClick={() => navigate(ROUTES.USER.CHECKOUT)}
              ></Button>
            </Badge>
          </S.CartBtn>
          {userInfo.data.id ? (
            <Dropdown overlay={menu}>
              <div className="userInfo">
                <h2>{userInfo.data.fullName}</h2>
                <Avatar
                  size={40}
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{
                        width: 40,
                      }}
                    />
                  }
                />
              </div>
            </Dropdown>
          ) : (
            <S.LoginBtn onClick={() => navigate(ROUTES.LOGIN)}>
              Đăng nhập
            </S.LoginBtn>
          )}
        </S.ButtonContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
