import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from "../../Ducks/action_creator";
import './Tips.css';
import Tip from './Tip'; 


function Tips(props) {
    const [tips, setTips] = useState([])
    
    useEffect(() => {
        getTips(); 
    });

    function getTips() {
        axios.get("/tips/retrieveAll", getTips).then(({ data }) => {
            if (data.success) {
                setTips(data.tips);
            } else {
                alert('Where is the help?')
            }
        })
    }

    const loopTips = tips.map((e, i) => {
        return <Tip tip={e} key={i}/>
    })

    return (
        <div>
            <h1>Tips</h1>
            {loopTips}
        </div>
    )
}

export default connect(null, Actions)(Tips); 