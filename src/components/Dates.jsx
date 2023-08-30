import React from 'react'

const Dates = () => {


    let dt = new Date()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[dt.getMonth()]
    let dat = dt.getDate()
    let hrs = dt.getHours()
    let min = dt.getMinutes()
    let period = "AM"
    if (hrs > 11) {
      period = "PM"
      if (hrs > 12)
        hrs -= 12
  
    }
    if (min < 10) {
      min = "0" + min
    }
    //let t = new Date().toLocaleTimeString()
  
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dt.getDay()]
    console.log(days[dt.getDay()]);
  
  


  return (
    <div>
         <section className='date'>

{/* <img className='sunny' src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyNightV2.svg" alt="" /> */}
<div className="time">
  <div className='tm'>{day}</div>
  <div className='tm'>{dat} {month}</div>
  <div className='tm'>{hrs + ":" + min + " " + period}</div>
</div>
</section>
        
        </div>
  )
}

export default Dates