import React, { useState } from 'react'

export default function YardTodos(){
    const [Yardtodo, setYardtodo] = useState("Yard Todos will dislplay here")
        return (
            <div>
                <button className = 'remove'>X</button>
                {Yardtodo}
                <button className = 'done'>Done</button>
            </div>
        )
}
