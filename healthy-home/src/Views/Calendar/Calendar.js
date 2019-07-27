import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

import './Calendar.css';
import NavBar from '../Home/NavBar/NavBar';

function Calendar() {
    return (
        <div className="Calendar">

                <NavBar/>

            
            <ReactCalendar />
        </div>
    );
}

export default Calendar;