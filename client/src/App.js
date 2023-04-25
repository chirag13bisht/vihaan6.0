import React from 'react'
import "./app.css"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/Login/Login'
import Records from './components/records/Records'
import Emergency from './components/Emergency/Emergency'
import Ambulance from './components/Ambulance/Ambulance'
import Appointment from './components/appointment/Appointment'
import Reminder from './components/reminder/Reminder'
import Signup from './components/Login/Signup'
import Apply from './components/apply/Apply'
import Add from './components/addCard/Add'
import Navbar from './components/navbar/Navbar'
import { initialState, reducer } from './components/reducer/useReducer'
import { useReducer,createContext } from 'react'
import Bmi from './components/devices/Bmi'
import Calorie from './components/devices/Calorie'
import Profile from './components/profile/Profile'

export const UserContext = createContext();
const Routing = () => {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/records' element={<Records/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/ambulance' element={<Ambulance/>} />
        <Route path='/emergency' element={<Emergency/>} />
        <Route path='/reminder' element={<Reminder/>} />
        <Route path='/apply' element={<Apply/>} />
        <Route path='/add-new-card' element={<Add/>} />
        <Route path='/bmi' element={<Bmi/>} />
        <Route path='/calorie' element={<Calorie/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    
    </div>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

   
    return (

        <>
            <BrowserRouter>
                <UserContext.Provider value={{ state, dispatch }}>
                        <Navbar />
                        <Routing />
                </UserContext.Provider>


            </BrowserRouter>


        </>
    )
}

export default App;