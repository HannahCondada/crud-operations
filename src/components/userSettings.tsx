import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./userSettings.css";
import Navbar from "./navbar";
import Button from "./button";

const UserSettings = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    navigate("/login");
  };

  const data = [
    { id: 1, info: "Username" },
    { id: 2, info: "First name" },
    { id: 3, info: "Last name" },
    { id: 4, info: "Email" },
    { id: 5, info: "Password" },
  ];

  return (
    <div>
      <Navbar label="Back" link="/account" />
      <div className="userSettings-center">
        <div className="settings-container">
          <h3>User Information</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Information</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.info}</td>
                  <td>
                    {user.id === 5 ? (
                      <button className="edit-button-settings">
                        Change Password
                      </button>
                    ) : (
                      <button className="edit-button-settings">Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="logout-button-container">
            <button className="logout-button-settings" onClick={handleLogout}>
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
