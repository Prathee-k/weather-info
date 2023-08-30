import React, { useEffect, useState } from 'react'
import './WeatInfo.css'
import cl from '../Assets/clouds.png'
import w2 from '../Assets/w2.png'
import cs from '../Assets/clearsky.png'
import fc from '../Assets/partialclouds.png'
import bc from '../Assets/scatteredclouds.png'
import sr from '../Assets/shower-rain.png'
import r from '../Assets/rain.png'
import ts from '../Assets/thunderstorm.png'
import m from '../Assets/mist.png'
import Dates from './Dates'
import Weatcard from './Weatcard'
import { BsSearch} from "react-icons/bs";

const WeatInfo = () => {
    let [inp, setInp] = useState("bangalore")
  let [val, setVal] = useState(cs)
  let [disp, setDisp] = useState()
  let info = async () => {
    try {

      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=d4252db8609ab923586e2ef6e0619063&units=metric`)
      let data = await res.json()
      console.log(data);
      let { temp,humidity,pressure } = data.main
      console.log(temp);
      let { speed } = data.wind
      console.log(speed);
      let { main } = data.weather[0]
      console.log(main);
      let { icon } = data.weather[0]
      let {description}=data.weather[0]
      console.log(description);
      let { country, sunset } = data.sys
      console.log(country, sunset);
      let { name } = data
      console.log(name);


      if (icon === "01d" || icon === "01n") {
        setVal(cs)
      }
      else if (icon === "02d" || icon === "02n") {
        setVal(fc)
      }
      else if (icon === "03d" || icon === "03n") {
        setVal(cl)
      }
      else if (icon === "04d" || icon === "04n") {

        setVal(bc)
      }
      else if (icon === "09d" || icon === "09n") {

        setVal(sr)
      }
      else if (icon === "10d" || icon === "10n") {
        setVal(r)
      }
      else if (icon === "11d" || icon === "11n") {
        setVal(ts)
      }
      else if (icon === "50d" || icon === "50n") {
        setVal(m)
      }

      let tempInfo = {
        temp, speed, main, country, sunset, name, icon,description,humidity,pressure

      }
      console.log(tempInfo);
      setDisp(tempInfo)
    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(()=>{
    info()
  },[])
  return (
    
    <div className='wt'>
      <h1 className='heading'>Weather Forecast</h1>

        <main className='content'>
            <div className="header">
                
                <input autoComplete='off' className='inp' placeholder='enter city...' value={inp} onChange={(e) => setInp(e.target.value)} ></input>
        <button className='bt' onClick={info}><BsSearch className='search'/></button>
            </div>
            <div className="b">
                 <div>
            <img className='img-dsc' src={val} alt="" height={120} width={140} />

          </div>
            </div>
            <div className="b1">
                
                <Dates/>
            </div>
           <div className="inf">
          
          <Weatcard {...disp}inp={inp}/>
         

      </div>

           
        </main>
    </div>
  )
}

export default WeatInfo