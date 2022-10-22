import { useSelector } from "react-redux";
import * as S from "./styles";

export default function Header() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <S.HeaderContainer>
      <h1>User Header: {userInfo.data.fullName}</h1>
    </S.HeaderContainer>
  );
}
