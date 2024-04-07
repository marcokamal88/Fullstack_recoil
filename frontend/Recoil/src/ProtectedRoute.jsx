/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import isAuthState from "./authState";
import { useRecoilState } from "recoil";

export default function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const [auth] = useRecoilState(isAuthState);
  console.log(auth, pathname);
  if (auth && pathname.toLocaleLowerCase() == "/login") {
    return <Navigate to="/Home" />;
  }
  if (!auth && pathname.toLocaleLowerCase() != "/login") {
    return <Navigate to="/login" />;
  }

  return children;


}
