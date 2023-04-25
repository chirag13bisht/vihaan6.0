import React from "react";
import "./records.css";
import { useState,useEffect } from "react";

const Records = () => {
  const [userData, setuserData] = useState({firstname:"",disease:"",symptoms:"",hospital:"",doctor:""})
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
    const {firstname, disease, symptoms, hospital, doctor}= userData;
    const res = await fetch('/sendrecord',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname, disease, symptoms, hospital, doctor
      })
    });
    const data = await res.json();
    console.log(data)
    
    if(!data){
      console.log("record not send");

    }else {
      window.alert("record Send");
      setuserData({ ...userData, disease:" ",symptoms :" " , hospital:" ",doctor:" "});
    }
  }
  return (
    <div className="record section">
      <div className="record-container container">

        <div className="title title1">
          <h1>Upload your important health records</h1>
        </div>

        <form method="POST" className="record-data">
            <input type="text" className='input' name='firstname' value={userData.firstname} onChange={handleInputs}  placeholder='Name of the patient' />
            <input type="text" className='input'name='disease' value={userData.disease} onChange={handleInputs}  placeholder='Disease name'/>
            <input type="text" className='input'name='symptoms' value={userData.symptoms}onChange={handleInputs}  placeholder='Symptoms'/>
            <input type="text" className='input'name='hospital' value={userData.hospital} onChange={handleInputs} placeholder='Enter the Hospital Name'/>
            <input type="text" className='input'name='doctor'value={userData.doctor} onChange={handleInputs} placeholder='Assigned Doctor name'/>
          
           <button className="data-submit" onClick={sumbitForm}>Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Records;
