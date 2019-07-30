import React, { useState } from 'react';
import NavBar from './../../NavBar/NavBar';

export default function Todos() {
    const [homeTips, setHomeTips] = useState("Home Tips will display here")
    const [yardTips, setYardTips] = useState("Yard Tips will display here")

    return (
        <div>
            <NavBar/>
            <div className='tipsBox'>
                <h2>Tips for the Home</h2>
                {homeTips}
            </div>
            <div className='tipsBox'>
                <h2>Tips for the Yard</h2>
                {yardTips}
            </div>
        </div>
    )
}

// class ToDos extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             homeTips:'display home tips here',
//             yardTips:'display yard tips here'
//         }
//     }
//     render() {
       
//     }
// }

// export default ToDos;