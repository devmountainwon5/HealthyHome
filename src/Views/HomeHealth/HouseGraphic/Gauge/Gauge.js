import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './Gauge.css'

function Gauge({score}){
    return(
        <div className="GaugeMain">
            {score>0 &&
            <GaugeChart id="gauge-chart3" nrOfLevels={20} colors={["#FF5F6D", "rgb(135, 255, 23)"]} arcWidth={0.3} percent={score}/>
            }
        </div>
    )
}
export default Gauge;