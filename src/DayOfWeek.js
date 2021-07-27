import React from 'react'


function DayOfWeek(props) {
    const Days=['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return (
        <div>
          {Days[props.day]}  
        </div>
    )
}

export default DayOfWeek
