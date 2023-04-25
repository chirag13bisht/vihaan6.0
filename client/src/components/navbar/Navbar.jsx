import React, {useEffect} from "react";
import "./navbar.css";
import { useState } from "react";
import {Link} from "react-router-dom";

import { useContext } from "react";
import { UserContext } from '../../App';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [userData, setuserData] = useState()

  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();


  const logoutUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/logout', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, credentials: "include"
    })

    if (res.status === 200) {
      dispatch({ type: "USER", payload: false })
      window.alert("logout");
      navigate("/login");
    }
    else {
      window.alert("error");
      console.log("error");
    }
  }

  const callAbout = async () => {
    try{
      const res = await fetch('/user',{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }, credentials: "include"
      });

      const data = await res.json();
      console.log(data)
      setuserData(data)
      console.log(userData)

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch(error){
      console.log(error);
    
    }
  }
  useEffect(()=>{
    callAbout();
  },[])
  

  const RenderMenu = () => {
      if (state) {
          return (
              <>
                  <a><Link to="/profile">{`Welcome! ${userData.firstname}`}</Link></a>
              </>
          )
      }
      else {
        <>
          <i class="fa-regular fa-user"></i>
        </>
      }
  }
  return (
    <div className="navbar section">
      <div className="nav-container container">
        <div className="navbar">
          <h1 className="logo">The Health.Aura</h1>
          <div className="nav-list">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#health-card">health Card</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <RenderMenu />
        </div>
      </div>
      
    </div>
  );
};



export default Navbar;
