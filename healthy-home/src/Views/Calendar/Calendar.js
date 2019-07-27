import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

import './Calendar.css';
import NavBar from '../Home/NavBar/NavBar';

function Calendar() {
    return (
        <div className="Calendar">
            <div>
                <NavBar/>
            </div>
            
            <ReactCalendar />
        </div>
    );
}

export default Calendar;