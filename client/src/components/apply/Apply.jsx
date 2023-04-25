import React from "react";
import "./apply.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Apply = () => {
  const [userData, setuserData] = useState({fullname:"",email:"",mobile:"",father:"",address:"",adhar:"",pan:""})
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

      setuserData({...userData,email:data.email})
     

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
  const sumbitCard =async (e)=>{
    e.preventDefault();
    const {fullname,email,mobile,father,address,adhar,pan}= userData;
    const res = await fetch('/addcard',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname,email,mobile,father,address,adhar,pan
      })
    });
    const data = await res.json();
    console.log(data)
    
    if(!data){
      console.log("card not add");

    }else {
      window.alert("card added");
      setuserData({ ...userData, fullname:" ",mobile:" ",father:" ",address:" ",adhar:" ",pan:" "});
    }
  }
  return (
    <div className="apply section">
      <div className="apply-container container">
        <div className="title apply-title">
          <h1>Fill the below mentioned details correctly.</h1>
        </div>
        <form method="POST" className="apply-input">
            <input type="text" placeholder="Full Name (as mentioned in the Aadhar card)" name="fullname" value={userData.fullname} onChange={handleInputs}/>
            <input type="email" placeholder="Email Address" name="email" value={userData.email} onChange={handleInputs}/>
            <input type="text" placeholder="Mobile Number" name="mobile" value={userData.mobile} onChange={handleInputs}/>
            <input type="text" placeholder="Father Name" name="father" value={userData.father} onChange={handleInputs}/>
            <input type="text" placeholder="Residential Adrress (as per Aadhar card)" name="address" value={userData.address} onChange={handleInputs}/>
            <input type="text" placeholder="Aadhar Card number"name="adhar" value={userData.adhar} onChange={handleInputs}/>
            <input type="text" placeholder="Pan Card Number" name="pan" value={userData.pan} onChange={handleInputs}/>
            <div className="aadhar">
                <label htmlFor="file">upload your Aadhar Card : </label><input type="File"/>
            </div>
            <div className="pan">
                <label htmlFor="file"></label>Upload your Pan Card : <input type="file"/>
            </div>
            <button className="sub-btn"onClick={sumbitCard}>Submit</button>
            <br />
            <br />
        <div className="add-card">
            <p>Already have a health card?</p>
            <Link to="/add-new-card"><button className="add-btn">Add Your card Now</button></Link>
        </div>
        </form>

      </div>
    </div>
  );
};

export default Apply;
