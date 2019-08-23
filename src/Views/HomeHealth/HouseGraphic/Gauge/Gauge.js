import React from 'react';
import GaugeChart from 'react-gauge-chart';

function Gauge({score}){
    return(
        <div className="GaugeMain">
            <GaugeChart id="gauge-chart3" nrOfLevels={20} colors={["#FF5F6D", "rgb(135, 255, 23)"]} arcWidth={0.3} percent={score}/>
        </div>
    )
}
export default Gauge;