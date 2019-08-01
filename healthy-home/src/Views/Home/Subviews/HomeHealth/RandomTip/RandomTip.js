import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Random from './Random'; 
import * as Actions from '../../../../../Ducks/action_creator';

import './RandomTip.css';

function RandomTip(props) {
    const [random, setRandom] = useState([])
    
    useEffect(() => {
        getRandomTip(); 
    }, []);

    function getRandomTip() {
        axios.get("/tips/getOne", getRandomTip).then(({ data }) => {
            if (data.success) {
                setRandom(data.random);
            } else {
                alert('Where is the help?')
            }
        })
    }

    const splitRandom = random.map((e, i) => {
        return <Random tip={e} key={i}/>
    })
    
    return (
        <div>
            <div className="all-tips">
                
            {splitRandom}
            </div>
        </div>
        )
    }


export default connect(null, Actions)(RandomTip);