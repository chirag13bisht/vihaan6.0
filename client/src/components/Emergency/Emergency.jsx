import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location/location'


 class Emergency extends Component{
      state = {
       text:{
         recipient:'7838651655',
         textmessage:'Hello I met with an accident please call ambulance'
       }
     }
     sendText = _ =>{
       const {text} = this.state
       fetch(`http://127.0.0.1:5001/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
       .catch(error => console.error(error))
     }
     render(){
       const {text} = this.state
     return (
       <div className="matter section">
         <div className="matter-container container">
           <div className="title">
             <h1>Let's get started</h1>
             <Location/>
             <div className="emergency">
               <Link to="/emergency">
                 <button className="btn1" onClick={this.sendText}>
                   Call for emergency
                 </button>
               </Link>
             </div>
           </div>
           </div>
           </div>
   
  )
}
 }

export default Emergency;