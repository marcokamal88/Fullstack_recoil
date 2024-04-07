import { atom } from "recoil";

const isAuthState = atom({
  key: "isAuthenticated",
  default: localStorage.getItem("token") ? true : false,
});

export default isAuthState;
