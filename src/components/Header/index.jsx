import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// assets
import Logo from "../../assets/logo/woolworth.png";
import Logo2 from "../../assets/logo/woolworth@2x.png";
import Logo3 from "../../assets/logo/woolworth@3x.png";

// style
import {
  ImgContainer,
  HeaderContainer,
  HeaderCenter,
  UserContainer,
} from "../../components/Style";
// Context
import { Context } from "../../utils/Context";
// firebas
import { auth } from "../../firebase-config";

export default function Header() {
  const { userData, setNewUser } = useContext(Context);
  const history = useHistory();
  const signOut = async () => {
    try {
      const response = await auth.signOut();
      console.log(response);
      history.push("/");
      setNewUser(false);
    } catch (error) {
      console.log(error);
    }
  };

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
          <p>{userData}</p>

          <span class="material-icons">account_circle</span>
          <span
            class="material-icons"
            onClick={() => {
              signOut();
            }}
          >
            meeting_room
          </span>
        </UserContainer>
      </HeaderCenter>
    </HeaderContainer>
  );
}
