import React, { useState, useEffect } from "react";
import { login, useLoggedIn } from "cart/cart";

import "./index.scss";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {showLogin && (
        <div
        className="login absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
        >
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          className="border text-sm border-gray-400 p-2 rounded-md w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
        />
        <button
          className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
          onClick={() => login(username, password)}
          id="loginbtn"
        >
          Login
        </button>
      </div>
      )}
    </>
  );
}
