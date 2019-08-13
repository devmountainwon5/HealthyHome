import React from 'react'
const dateSetter = (date, props,  time) => {
    const completedDate = new Date(date ).getTime()
            const today = Date.now()
            const timeInterval =time * 24 * 60 * 60 * 1000
            if(completedDate<today + timeInterval){
                return <div>{props.todo.todo_item} Still Time</div>
            } else {
                return (<div>{props.todo.todo_item} Past Due<button
                onClick={() => {
                    props.completeTodo(props.id)
                }}>
                Complete
            </button>
            <button
                onClick={() => {
                    props.deleteTodo(props.todo_id)
                }}>
                Remove
            </button></div>)
            }
}
export default function Todo(props) {
    debugger
    switch (props.todo.frequency_id) {
        case 1:
        return dateSetter(props.todo.completed_dates[0].completed_date, props, 1)
        case 2:
            return dateSetter(props.todo.completed_dates[0].completed_date,props, 7)
        case 3:
           return  dateSetter(props.todo.completed_dates[0].completed_date,props, 28)
        case 4:
           return dateSetter(props.todo.completed_dates[0].completed_date,props, 91)
        case 5:
            return dateSetter(props.todo.completed_dates[0].completed_date,props, 182)
        case 6:
            return dateSetter(props.todo.completed_dates[0].completed_date,props, 365)
        default:
                return <div>{props.todo.todo_item} Still Time</div>
            
    }
}
