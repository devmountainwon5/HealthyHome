import React from 'react'

import './Random.css'
export default function Tip(props) {
    return (
        <div>
            <div className='single-random'>
                <a className='random-name' href={props.tip.blog_link} target="_blank" rel="noopener noreferrer">
<<<<<<< HEAD
                <img className='random-picture' src={props.tip.tip_picture} alt="tip picture"/>
=======
                <img className='random-picture' src={props.tip.tip_picture} alt="tips"/>
>>>>>>> dev
                    <h2>
                        {props.tip.tip_name}
                    </h2>
                </a>
            </div>
        </div>
    )
}