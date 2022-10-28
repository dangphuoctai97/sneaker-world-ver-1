import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: ${(props) => (props.sticky ? "-100%" : "0px")};
  left: 0px;
  right: 0px;
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out 0s;
  border-bottom: 1px solid rgb(240, 240, 240);
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 12px 0px;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-flow: row nowrap;
  height: 70px;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0px auto;
  & .navBarLogo {
    & span {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      position: relative;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      height: 70px;
      font-size: 30px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 1000;
      letter-spacing: 5px;
      cursor: pointer;
      & a {
        position: relative;
        display: inline-block;
        color: royalblue;
        overflow: hidden;
        background: linear-gradient(
          to right,
          #f6432e,
          midnightblue 50%,
          royalblue 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none;
        &:hover {
          background-position: 0 100%;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & .userInfo {
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    margin: 0 10px;
  }
`;
export const CartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 4.9px 0;
  font-size: 18px;
  min-width: 40px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #fff;
  touch-action: manipulation;
  cursor: pointer;
  border: 2px solid #000;
`;

export const NavBar = styled.div`
  & ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    & li {
      margin: 0 20px;
      & span {
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        height: 70px;
        text-decoration: none;
        font-size: 14px;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 2px;
        cursor: pointer;
        &::before {
          right: 50%;
          content: "";
          position: absolute;
          bottom: 0px;
          width: 0%;
          height: 4px;
          background-color: #4285f4;
          transition: all 0.3s ease-in-out 0s;
        }
        &::after {
          left: 50%;
          content: "";
          position: absolute;
          bottom: 0px;
          width: 0%;
          height: 4px;
          background-color: #f6432e;
          transition: all 0.3s ease-in-out 0s;
        }
        &:hover::after,
        &:hover::before {
          width: 50%;
        }
        & a {
          color: #000;
        }
      }
    }
  }
`;
export const HeaderItem = styled(Link)`
  & span {
    ${(props) =>
      props.$active &&
      css`
        &::before {
          padding-right: 50%;
        }
        &::after {
          padding-left: 50%;
        }
        &:active::after,
        &:active::before {
          width: 50%;
        }
      `}
  }
`;

export const MobileMenu = styled.div``;
