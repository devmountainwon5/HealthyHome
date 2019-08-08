import React, { useState } from 'react';
import NavBar from './../../NavBar/NavBar';
import HomeTodo from './HomeTodo';
import YardTodo from './YardTodo';

export default function Todos() {
    return (
        <div>
            <NavBar/>
            <div className='todoBox'>
                <h2>Todos for the Home</h2>
                <HomeTodo/>

            </div>
            <div className='todoBox'>
                <h2>Todos for the Yard</h2>
                <YardTodo/>
                
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