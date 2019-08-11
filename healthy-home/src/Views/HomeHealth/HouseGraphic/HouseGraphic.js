import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from 'Ducks/action_creator';

import './HouseGraphic.css';

import niceHouse from 'Assets/HealthyHouse.png';
import midHouse from 'Assets/MidHouse.png';
import grossHouse from 'Assets/GrossHouse.png';


function HouseGraphic(props){
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const {user:{user_id}, setUpcomingTodos} = props

    useEffect(() => {
        axios.post("/barometer/retrieveScore", {user_id}).then(({data:{score, upcomingTodos}}) => {
            if(score){
                setLoading(true)
                if(score*100 >= 85){
                    setPic(niceHouse)
                } else if (score*100 <85 && score*100 > 45){
                    setPic(midHouse)
                } else if (score*100 <= 45){
                    setPic(grossHouse)
                }
                setUpcomingTodos(upcomingTodos)
            } else {
                console.log('Response from score retrieval is not a number')
            }
        })
    }, [user_id, setUpcomingTodos]);

    return(
        <div>
            <div className="housePic">
                {loading && 
                    <img src={pic} alt="house-score"/>
                }
            </div>
        </div>
    )

}

export default connect(state => state, actions)(HouseGraphic);
