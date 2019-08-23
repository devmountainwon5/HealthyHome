import React from 'react'
import TodoCard from './TodoCard/TodoCard'
const dateSetter = (date, props, time) => {

    const completedDate = new Date(date).getTime()
    const today = Date.now()
    const timeInterval = time * 24 * 60 * 60 * 1000
    if (completedDate < today + timeInterval) {
        return ( <TodoCard good={true} timeInterval={timeInterval} completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} completedDate={completedDate} todo={props.todo}></TodoCard>
        )
    } else {
        return ( <TodoCard good={false} timeInterval={timeInterval} completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} completedDate={completedDate} todo={props.todo}></TodoCard>)
    }
}
export default function Todo(props) {

    function compare(a, b) {
        if (a.completed_date_id > b.completed_date_id) {
            return -1;
        }
        if (a.completed_date_id < b.completed_date_id) {
            return 1;
        }
        return 0;
    }
    props.todo.completed_dates = props.todo.completed_dates.sort(compare)

    switch (props.todo.frequency_id) {
        case 1:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 1)
        case 2:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 7)
        case 3:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 28)
        case 4:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 91)
        case 5:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 182)
        case 6:
            return dateSetter(props.todo.completed_dates[0].completed_date, props, 365)
        default:
            return <div>{props.todo.todo_item} Still Time</div>

    }
}
