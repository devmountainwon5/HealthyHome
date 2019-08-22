import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './Gauge.css'

function Gauge(props){

    let percent = props.score;

    return(
        <div className="GaugeMain">
            <GaugeChart id="gauge-chart3" nrOfLevels={20} colors={["#FF5F6D", "rgb(135, 255, 23)"]} arcWidth={0.30} marginInPercent={0.10} percent={percent}/>
        </div>
    )

}

export default Gauge;