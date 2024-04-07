/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRecoilState } from "recoil";
import isAuthState from "./authState";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import FacebookButton from "./FacbookLogin";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLoggedIn] = useRecoilState(isAuthState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
          "http://127.0.0.1:3000/login",
          {
            username: userName,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data);
          setIsLoggedIn(true);
          navigate("/Home");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <br />
      <FacebookButton />
    </div>
  );
}
