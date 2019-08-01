import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Random from './Random'; 
import * as Actions from '../../../../../Ducks/action_creator';

import './RandomTip.css';

function RandomTip(props) {
    const [random, setRandom] = useState([{tip_type_id: 1, tip_name: "How to keep your pelican squeaky clean:", blog_link: 'https://www.youtube.com/', tip_picture: 'https://i.imgur.com/wBPorqO.jpg', active: true, date_added: '2019-07-19'}])
    
    useEffect(() => {
        getRandomTip(); 
    });

    function getRandomTip() {
        debugger; 
        axios.get("/tips/getOne", getRandomTip).then(({ data }) => {
            debugger; 
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