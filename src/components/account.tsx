import React, { useState } from "react";
import "./account.css";
import Navbar from "./navbar";

function Account() {
  const [ProfilePic, setProfilePic] = useState<string | null>(null);
  const [CoverPhoto, setCoverPhoto] = useState<string | null>(null);

  const handleProfilePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleCoverPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Navbar label="Account Settings" link="/userSettings" />
      <div className="center">
        <div className="account-container">
          <div className="cover-photo-container">
            <div className="cover-photo-inner">
              {CoverPhoto ? (
                <img src={CoverPhoto} alt="Cover Preview" className="cover" />
              ) : (
                <img
                  src={CoverPhoto || "/defaultCoverPhoto.jpg"}
                  alt="Cover Preview"
                  className="cover"
                />
              )}
              <input
                id="cover-pic-upload"
                type="file"
                accept="image/*"
                onChange={handleCoverPhotoUpload}
                style={{ display: "none" }}
              />

              <label htmlFor="cover-pic-upload" className="edit-cover-button">
                Edit Banner
                <img
                  className="pencil-logo"
                  src="pencil_icon.png"
                  alt="Edit Icon"
                />
              </label>
            </div>
          </div>

          <div className="profile-photo-container">
            <div className="profile-photo-inner">
              {ProfilePic ? (
                <img
                  src={ProfilePic}
                  alt="Profile Preview"
                  className="profile-photo"
                />
              ) : (
                <img
                  src={ProfilePic || "/DefaultProfilePic2.png"}
                  alt="Profile Preview"
                  className="profile-photo"
                />
              )}
              <input
                id="profile-pic-upload"
                type="file"
                accept="image/*"
                onChange={handleProfilePicUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className="info-container">
            <div className="profile-section">
              <label htmlFor="profile-pic-upload" className="edit-pfp-button">
                Edit profile photo
                <img className="camera-logo" src="camera.png" alt="Edit Icon" />
              </label>
              <div className="text-section">
                <h3>Username</h3>
                <p>Firstname Lastname</p>
              </div>
            </div>
          </div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}

export default Account;
