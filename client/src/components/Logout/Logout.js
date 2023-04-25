import React from 'react'
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
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
  return (
    <></>
  )
}

export default Logout