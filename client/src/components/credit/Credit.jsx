import React from "react";
import "./credit.css";
import credit from "../../assets/credit.png";
import { Link } from "react-router-dom";

const Credit = () => {
  return (
    <div className="credit section" id="credit">
      <div className="credit-container container">
        <div className="title">
          <h1>The Health Card</h1>
          <p>Get Your Emergency Credit card</p>
        </div>
        <div className="credit-data">
          <img src={credit} alt="" />
          <div className="credit-items">
            <h3>Presenting health card</h3> <br />
            <p>
              The health card is a credit card which will be used for the
              medical payments in case of money shortage or any kind of
              treatment need. It will only be used for the medical treatment
              only. <br />
              <br />
              How cool is it, so what are you waiting for?
            </p>
            <Link to="/apply"><button className="credit-btn">Apply Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
