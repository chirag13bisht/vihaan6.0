import React from 'react'
import "./device.css"
import {Link} from "react-router-dom"

const Devices = () => {
  return (
    <div className="device section">
            <div className="title">
                <h1>This is not the end</h1>
                <p>topping from health aura.</p>
            </div>
        <div className="device-container container">
            <div className="boxer">
                <div className="card1 card">
                    <h2>Calorie meter</h2>
                    <Link to="/calorie"><button className='card-btn'>Check Now</button></Link>
                </div>
                <div className="card1 card">
                    <h2>BMI Report</h2>
                    <Link to="/bmi"><button className='card-btn'>Check Now</button></Link>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Devices