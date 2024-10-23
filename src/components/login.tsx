import React, { Component, useDebugValue } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import "./login.css";
import Navbar from "./navbar";

function LogIn() {
  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!Username || !Password) {
      alert("All fields are required!");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="background">
      <Navbar />
      <form onSubmit={handleSubmit} className="login-container-1">
        <div className="login-container">
          <div className="inputs">
            <div className="header">
              <div className="login">Login</div>
            </div>

            <div className="underliner"></div>

            <div className="input">
              <input
                type="text"
                placeholder="Username"
                required
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>

            <div className="button-container">
              <Button
                className="LoginButton"
                label="Login"
                onClick={handleSubmit}
              />
            </div>

            <div className="already">
              <p>
                Don't have an account? <Link to="/register">Click Here.</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
