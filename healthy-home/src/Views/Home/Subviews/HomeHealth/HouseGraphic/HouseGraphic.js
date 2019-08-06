import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../../../../Ducks/action_creator';

import './HouseGraphic.css';

import niceHouse from './../../../../../Assets/HealthyHouse.png';
import midHouse from './../../../../../Assets/MidHouse.png';
import grossHouse from './../../../../../Assets/GrossHouse.png';


function HouseGraphic(props){
    const [pic, setPic] = useState([])

    useEffect(() => {
        getHouseGraphic();
    }, []);

    function getHouseGraphic() {
        axios.post("/barometer/retrieveScore", getHouseGraphic).then(({data}) => {
            if (data.success){
                actions.setHomePic(data.home);
            } else {
                alert('Where did my house go?')
            }
        })
    }

    const homeScore = () => {

    }

        return(
            <div>
                <div className="housePic">
                    {homeScore}
                </div>
            </div>
        )

}

export default connect(null, actions)(HouseGraphic);