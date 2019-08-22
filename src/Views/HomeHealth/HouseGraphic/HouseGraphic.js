import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actions from 'Ducks/action_creator';
import httpRequest from "../../../shared/services/http_request";

import Gauge from './Gauge/Gauge';

import './HouseGraphic.css';

import niceHouse from 'Assets/HealthyHouse.png';
import secondBest from 'Assets/2ndBestHouse.png';
import midHouse from 'Assets/MidHouse.png';
import secondWorst from 'Assets/2ndWorstHouse.png';
import grossHouse from 'Assets/GrossHouse.png';


function HouseGraphic(props){
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const {user:{user_id}, setUpcomingTodos} = props
    const [score, setScore] = useState()

    useEffect(() => {
        httpRequest.post("/barometer/retrieveScore", {}, {user_id}).then(({score, upcomingTodos}) => {
                console.log(score)
                if(score){
                    setLoading(true)
                    if(score*100 >= 85){
                        setPic(niceHouse)
                        setScore(score)
                    } else if (score*100 <85 && score*100 > 70){
                        setPic(secondBest)
                        setScore(score)
                    } else if (score*100 <70 && score*100 > 50){
                        setPic(midHouse)
                        setScore(score)
                    } else if (score*100 <50 && score*100 >35){
                        setPic(secondWorst)
                        setScore(score)
                    } else if (score*100 <= 35){
                        setPic(grossHouse)
                        setScore(score)
                    }
                    setUpcomingTodos(upcomingTodos)
                } else {
                    console.log('Response from score retrieval is not a number')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [user_id, setUpcomingTodos, props.history]);

    return(
            <div className="housePic">
                    {loading && 
                        <img src={pic} alt="house-score"/>
                    }
                    <div className="gauge">
                        <h2>House Health</h2> 
                        {loading &&
                            <Gauge score={score}/>
                        }
                    </div> 
            </div>
    )

}

export default connect(state => state, actions)(withRouter(HouseGraphic));
