import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Menu, Button, Badge, Avatar, Image } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

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
            <Dropdown
              overlay={
                <Menu>
                  {userInfo.data.role === "admin" && (
                    <Menu.Item
                      onClick={() => {
                        navigate(ROUTES.ADMIN.DASHBOARD);
                      }}
                    >
                      Go dashboard
                    </Menu.Item>
                  )}
                  <Menu.Item onClick={() => dispatch(logoutAction())}>
                    Đăng xuất
                  </Menu.Item>
                </Menu>
              }
            >
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
            <Button onClick={() => navigate(ROUTES.LOGIN)}>Đăng nhập</Button>
          )}
        </S.ButtonContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
