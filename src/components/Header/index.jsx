import React from "react";
// assets
import Logo from "../../assets/logo/woolworth.png";
import Logo2 from "../../assets/logo/woolworth@2x.png";
import Logo3 from "../../assets/logo/woolworth@3x.png";
import IconUser from "../../assets/usuario.svg";
// style
import {
  ImgContainer,
  HeaderContainer,
  HeaderCenter,
  ImgLogo,
  UserContainer,
} from "../../components/Style";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderCenter>
        <ImgContainer
          src={Logo}
          alt="Bambú mobile logo"
          srcSet={`${Logo2} 2x, ${Logo3} 3x `}
        />
        <h1>NEWS</h1>
        <UserContainer>
          <p>psialfredomtz@gmail.com</p>
          <ImgLogo src={IconUser} alt="icon user" />
        </UserContainer>
      </HeaderCenter>
    </HeaderContainer>
  );
}
