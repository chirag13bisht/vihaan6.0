import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register section'>
        <div className='register-container container' id='register'>

            <div className='title register-title'>
                <h1>So what are you waiting for?</h1>
                <h4>Register now</h4>
            </div>

            <div className='register-data'>
                <Link style={{textDecoration: 'none'}} to="/login">
                <div className='box-1 box'>
                    Register <br/> as a User
                </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/login">
                <div className='box-2 box'>
                    Register <br/> as a Doctor
                </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Register