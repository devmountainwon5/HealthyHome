import React from 'react'
import './Tip.css'; 

export default function Tip(props) {
    return (
        <div>
            <div className='singleTips'>
                <a href={props.tip.blog_link} target="_blank">
                    <h2>
                        {props.tip.tip_name}
                    </h2>
                    <img className='tipPicture' src={props.tip.tip_picture} alt="tip picture"/>
                </a>
            </div>
        </div>
    )
}
