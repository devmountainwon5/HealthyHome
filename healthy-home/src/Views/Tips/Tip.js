import React, {useEffect} from 'react'
import axios from 'axios';
import './Tip.css'; 

export default function Tip(props) {

    useEffect(() => {
		// Auth: Is there a current user session?
		axios.get('/auth/me')
			.then((response) => {
				console.log(response.data.success)
				if(!response.data.success){
					props.history.push('/')
				}
			})
    })


    return (
        <div>
            <div className='singleTips'>
                <a className='tip-name' href={props.tip.blog_link} target="_blank" rel="noopener noreferrer">
                <img className='tip-picture' src={props.tip.tip_picture} alt="tip"/>
                    <h2>
                        {props.tip.tip_name}
                    </h2>
                </a>
            </div>
        </div>
    )
}

