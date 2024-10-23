import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import "./register.css";
import Navbar from "./navbar";

function Register() {
  const navigate = useNavigate();

  const [ProfilePic, setProfilePic] = useState<string | null>(null);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleProfilePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Password validation function
  const validatePassword = (password: string) => {
    if (password.length <= 8) {
      return "Password must be more than 8 characters.";
    }
    if (/\s/.test(password)) {
      return "Password must not contain spaces.";
    }
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Register validation
    if (
      !FirstName ||
      !LastName ||
      !Username ||
      !Email ||
      !ConfirmEmail ||
      !Password ||
      !ConfirmPassword
    ) {
      alert("All fields are required!");
      return;
    }

    if (Email !== ConfirmEmail) {
      alert("Emails do not match!");
      return;
    }

    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if the email has a valid format
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(Email)) {
      alert("Invalid email format!");
      return;
    }

    // Check password validation
    if (passwordError) {
      alert(passwordError);
      return;
    }

    navigate("/login");
  };

  return (
    <div>
      {/* Navbar is inserted here */}
      <Navbar />
      <form onSubmit={handleSubmit} className="register-container-1">
        <div className="register-container">
          <div className="inputs">
            <div className="header">
              <div className="register">Register</div>
            </div>

            <div className="underliner"></div>

            <div className="profile-pic-container">
              <label htmlFor="profile-pic-upload">
                <div className="profile-pic">
                  {ProfilePic ? (
                    <img
                      src={ProfilePic}
                      alt="Profile Preview"
                      className="profile-pic-img"
                    />
                  ) : (
                    <div className="default-pic">
                      <img
                        src="/DefaultProfilePic.png"
                        alt="Default Profile"
                        className="default-pic-img"
                      />
                    </div>
                  )}
                </div>
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div className="input-container">
              <div className="input half">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="input half">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="input">
              <input
                type="text"
                placeholder="Username"
                required
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input">
              <input
                type="email"
                placeholder="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input">
              <input
                type="email"
                placeholder="Confirm Email"
                required
                value={ConfirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>

            <div className="input password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={Password}
                onChange={handlePasswordChange}
                className={passwordError ? "error" : ""}
              />
              {/* Toggle password visibility */}
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

            <div className="input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* Toggle password visibility */}
              <button
                type="button"
                className="password-toggle-btn"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>

            {/* Display password error */}
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}

            <div className="button-container">
              <Button
                className="RegisterButton"
                label="Register"
                onClick={handleSubmit}
              />
            </div>

            <div className="already">
              <p>
                Have an account already? <Link to="/login">Click Here.</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
