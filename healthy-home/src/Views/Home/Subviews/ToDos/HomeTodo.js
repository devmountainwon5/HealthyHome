import React, { useState } from 'react'

export default function HomeTodos(){
    const [Hometodo, setHometodo] = useState("Home Todos will dislplay here")
        return (
            <div>
                <button className = 'remove'>X</button>
                {Hometodo}
                <button className = 'done'>Done</button>
            </div>
        )
}
