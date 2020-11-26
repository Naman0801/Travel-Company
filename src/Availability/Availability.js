import React, { useState } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Availability() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
    return (
        <div className='app__date' id='about'> 
            <div>
            <p>Check In</p>
            <DatePicker selected={startDate} placeholderText='DD MM YYYY' onChange={date => setStartDate(date)} />
            </div>
            <div>
            <p>Check Out</p>
            <DatePicker selected={endDate} placeholderText='DD MM YYYY' onChange={date => setEndDate(date)} />
            </div>
            <div>
              <div>
                <p>Adults</p>
                <input type='number' value='1'/>
              </div>        
              <div>
                <p>Kids</p>
                <input type='number' value='0'/>
              </div>
            </div>
            <button>Search</button>
      </div>
    )
}

export default Availability
