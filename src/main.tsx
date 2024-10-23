import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// Import CSS files
import "./index.css";
import "./components/button.css";
// Import neccessary things
import Button from "./components/button";
import Register from "./components/register";
import LogIn from "./components/login";
import Account from "./components/account";
import UserSettings from "./components/userSettings";
import AdminPage from "./components/adminpage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="buttons-container">
        <Button
          className="button1"
          label="Log In"
          onClick={() => navigate("/login")}
        />
        <Button
          className="button2"
          label="Register"
          onClick={() => navigate("/register")} //
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define routes. This is IMPORTANT, otherwise the the pages will not be read and will not be redirected.*/}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/userSettings" element={<UserSettings />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
