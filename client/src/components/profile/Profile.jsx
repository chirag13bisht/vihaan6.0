import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile section">
      <div className="profile-container">
        <div className="user-info">
          <p>user profile</p>
          <div className="user-data">
            <h4>Name : kefhiehiu</h4>
            <h4>Email : knvidfhioh</h4>
          </div>
        </div>
        <div className="user-reports">
          <p>health reports</p>
          <div className="user-data">
            <h4>Blood Report : </h4>
            <h4>Blood Pressure Report : </h4>
            <h4></h4>
            <h4>Report 1</h4>
          </div>
        </div>
        <div className="saved-cards">
          <p>saved cards</p>
          <div className="user-data">
            <h4>Card number : </h4>
            <h4>Card holder name : </h4>
            <h4>Expirary date : </h4>
            <h4>CVV : </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
