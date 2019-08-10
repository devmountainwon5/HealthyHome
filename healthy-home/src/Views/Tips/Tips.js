import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from "../../Ducks/action_creator";
import './Tips.css';
import Tip from './Tip'; 
import NavBar from 'Views/NavBar/NavBar';


function Tips(props) {
    const [tips, setTips] = useState([])
    useEffect(() => {
        axios.get("/tips/retrieveAll", tips).then(({ data }) => {
            if (data.success) {
                setTips(data.tips);
            } else {
                alert('Where is the help?')
            }
        })
    }, [tips])


    const loopTips = tips.map((e, i) => {
        return <Tip tip={e} key={i}/>
    })

    return (
        <div className="tips-main">
            <NavBar/>
            <h1 className="tips-title">Tips</h1>
            <div className="center-tips">
                <div className="all-tips-div">
                    {loopTips}
                </div>
            </div>
            
            
        </div>
    )
}

export default connect(null, Actions)(Tips); 