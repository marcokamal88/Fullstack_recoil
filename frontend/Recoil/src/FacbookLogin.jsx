import { useState } from "react";
import isAuthState from "./authState";
import FacebookLogin from "react-facebook-login";
import { useRecoilState } from "recoil";

const FacebookButton = () => {
  const [accessToken, setAccessToken] = useState("");
  const [, setIsLoggedIn] = useRecoilState(isAuthState);
  const componentClicked = (data) => {
    console.log("data", data);
  };
  const responseFacebook = (response) => {
    console.log(response.accessToken);
    setAccessToken(response.accessToken);
    localStorage.setItem("token", response.accessToken);
    setIsLoggedIn(true);
  };
  return (
    <div>
      {accessToken}
      <FacebookLogin
        appId="334647792468483"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};
export default FacebookButton;
