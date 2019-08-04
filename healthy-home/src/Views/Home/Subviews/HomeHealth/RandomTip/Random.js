import React from 'react'

import './Random.css'
export default function Tip(props) {
    return (
        <div>
            <div className='singleRandom'>
                <a className='random-name' href={props.tip.blog_link} target="_blank" rel="noopener noreferrer">
                <img className='randomPicture' src={props.tip.tip_picture} alt="tip picture"/>
                    <h2>
                        {props.tip.tip_name}
                    </h2>
                </a>
            </div>
        </div>
    )
}