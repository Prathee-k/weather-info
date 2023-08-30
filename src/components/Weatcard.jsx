import React from 'react'
import { SiCodeclimate } from "react-icons/si";
import {FaTemperatureHalf} from "react-icons/fa6";
import {TbWind } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi"
import { GiSunset } from "react-icons/gi";
import { IoPartlySunnySharp } from "react-icons/io5";
const Weatcard = ({temp,speed,main,country,sunset,name,icon,description,inp,humidity,pressure}) => {
  let set=sunset
  let date=new Date(set*1000)
  let hrs = date.getHours()
    let min = date.getMinutes()
    let period = "AM"
    if (hrs > 11) {
      period = "PM"
      if (hrs > 12)
        hrs -= 12
  
    }
    if (min < 10) {
      min = "0" + min
    }
  let time=`${date.getHours()}:${date.getMinutes()}`
  return (
    <div>
      <div className='place'>
                <FaLocationDot className='map'  color='white' /> <h2  id='place'> {name}<span className='com'>,</span>{country}</h2>

                </div>
      <div className='desc'>
      <SiCodeclimate id='disc'/>   <span id='desc'>{description}</span>

      </div>
      <div className="temp">
  <FaTemperatureHalf id='temp'/><span className='feel'> feels like</span>    {temp}&deg;C 

      </div>
      <section className='w-info'>
        <div>
          <h4 className='sunset'><IoPartlySunnySharp id='ix'/><span>sunset</span> <h5>{time+" "+period}</h5></h4>
        </div>
        <div >
        <h4 className='wind'><TbWind id='ix' /> <span>wind</span>  <h5>{speed} km/h</h5></h4>

        </div>
      
        <div >
          <h4 className='humi'>
          <WiHumidity id='hum'  /> <span>humidity</span>  <h5>{humidity}%</h5> 

          </h4>

        </div>
        <div>
          <h4> <span>pressure</span> <h5>{pressure} mb</h5></h4>
        </div>
      </section>
{/*       
        {main}
        {sunset}
       <br></br>
        {icon} */}
 {/* {icon}  */}
    </div>
  )
}

export default Weatcard