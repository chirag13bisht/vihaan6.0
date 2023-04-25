import React from 'react'
import "./info.css"

const Info = () => {
    return (
        <div className='info section' id='about'>
            <div className="info-container container">

                <div className="title about-title">
                    <h1>Know More About Us....</h1>
                </div>

                <div className="info-data">
                    <p>
                        Health Aura is a Web Application which holds the past and present
                        health record of the patient at a single place where they can access
                        all of their details and if the doctor has the access to that
                        patient he will also be able to know about the past and present
                        health record of the patient.
                    </p>
                    <br/>
                    <br/>
                    <p>
                        Patients can access their health records through the web app, view their medical
                        history, request appointments, and communicate with their healthcare providers. The
                        web app also provides personalized health recommendations and alerts, including
                        medication reminders, based on the patient's health profile.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Info