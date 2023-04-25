import React from "react";
import "./add.css";
import health from "../../assets/health.png";
import { useState } from "react";
import { useEffect } from "react";

const Add = () => {
  const [userData, setuserData] = useState({number:"",hname:"", year:"", expiry:"",cvv:""})
  const userRecord = async () => {
    try{
      const res = await fetch('/record',{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }, 
      });

      const data = await res.json();
      setuserData(data)

      setuserData({...userData,firstname:userData.firstname})
     

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch(error){
      console.log(error);
      
    
    }
  }
  useEffect(()=>{
    userRecord();
  },[])
  
  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setuserData({...userData, [name]:value});
  }

  const sumbitForm =async (e)=>{
    e.preventDefault();
    const {number,hname,year,expiry,cvv}= userData;
    const res = await fetch('/carddetails',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        number,hname,year,expiry,cvv
      })
    });
    const data = await res.json();
    console.log(data)
    
    if(!data){
      console.log("details not send")

    }else {
      window.alert("details send");
      setuserData({ ...userData,});
    }
  }

  return (
    <div className="add section">
      <div className="add-container container">
        <div className="card-content">

          <div className="front">

            <img src={health} alt="" />
            <div className="card-number">################</div>

            <div className="flex-box">
              <div className="box1">
                <span>Card Holder</span>
                <div className="card-name">full name</div>
              </div>
              <div className="box1">
                <span>Expires</span>
                <div className="expiration">
                  <span className="exp-month">mm</span>
                  <span className="exp-year">yyyy</span>
                </div>
              </div>
            </div>

          </div>

          <div className="back">
            <div className="strip"></div>
            <div className="box1">
                <span>cvv</span>
                <div className="cvv-box"></div>
                <img src={health} alt="" />
            </div>
          </div>

        </div>

        <form method="POST">
          <div className="input-box">
            <span>card number</span>
            <input type="number" maxLength="16" name="number" className="number-input" onChange={handleInputs}/>
          </div>
          <div className="input-box">
            <span>card holder name</span>
            <input type="text" className="holder-input" name="hname" onChange={handleInputs}/>
          </div>
          <div className="flexbox">
            <div className="input-box">
              <span>expiration mm</span>
              <select  className="month-input"  name="expiry"onChange={handleInputs}>
                <option value="month" selected disabled >
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="input-box">
              <span >expiration year</span>
              <select name="year" onChange={handleInputs} className="year-input">
                <option value="year" selected disabled name="year" onChange={handleInputs}>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className="input-box">
              <span >cvv</span>
              <input type="number" maxLength={4} className="cvv-input" name="cvv" onChange={handleInputs}/>
            </div>
          </div>
          <button onClick={sumbitForm} className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Add;
