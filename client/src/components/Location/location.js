import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `c5a48b3e59d242aedae7b2fb0b9ad0e4`
const Location = () => {
    const [latitude, setLatitude] = useState({});
    const [longitude, setLongitude] = useState({});
    const [city, setCity] = useState({});
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
        let finalApiEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
        axios.get(finalApiEndPoint)
            .then((res) => {
                setCity(res.data)
            })

    }, [latitude, longitude])
  return (
   <div>{city.name}</div>
  )
}

export default Location