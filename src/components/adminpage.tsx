import React from "react";
import { useNavigate } from "react-router-dom";
import "./adminPage.css";
import Navbar from "./navbar";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleOptionsClick = (userId: number) => {
    // Declare userId type
    navigate("/adminOptions", { state: { userId } });
  };

  const data = [
    { id: 1, info: "Username1" },
    { id: 2, info: "Username2" },
    { id: 3, info: "Username3" },
    { id: 4, info: "Username4" },
    { id: 5, info: "Username5" },
  ];

  return (
    <div>
      <Navbar />
      <div className="userSettings-center">
        <div className="settings-container">
          <h3>Accounts List</h3>
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
                    <button
                      className="edit-button-admin"
                      onClick={() => handleOptionsClick(user.id)}
                    >
                      Options
                    </button>
                    <button className="delete-button-admin">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
