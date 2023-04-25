import React from "react";
import "./data.css";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="matter section" id="services">
      <div className="matter-container container">
        <div className="title">
          <h1>Let's get started</h1>

          <div className="emergency">
            <Link to="/emergency">
              <button className="btn1">
                Call for emergency
              </button>
            </Link>
          </div>
        </div>

        <div className="data-matter">
          <div className="data-items">
            <h2>Upload your health Records</h2>
            <Link to="/records">
              <button className="btn data-btn">Upload</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Book Doctor's Appointment</h2>
            <Link to="/appointment">
              <button className="btn data-btn">Book</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Book an Ambulance</h2>
            <Link to="/Ambulance">
              <button className="btn data-btn">Book</button>
            </Link>
          </div>
          <div className="data-items">
            <h2>Set medical reminders</h2>
            <Link to="/reminder">
              <button className="btn data-btn">Set</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
