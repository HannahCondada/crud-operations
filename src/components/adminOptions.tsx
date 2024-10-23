import React from "react";
import { useNavigate } from "react-router-dom";
import "./adminOptions.css";
import Navbar from "./navbar";

const AdminOptions = () => {
  const navigate = useNavigate();

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
      <Navbar label="Back" link="/adminpage" />
      <div className="userSettings-center">
        <div className="settings-container">
          <center>
            <h1>Admin Access</h1>
          </center>
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

          {/* since this is an admin access, if they click "Log out" only the user account will be logged out. But not the admin. */}
          <div className="logout-button-container">
            <button
              className="logout-button-settings" /*onClick={handleLogout}*/
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOptions;
