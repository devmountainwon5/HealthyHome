import React from 'react'
import './ToDo.css';

const dateSetter = (date, props, time) => {
     
    const completedDate = new Date(date).getTime()
    const today = Date.now()
    const timeInterval = time * 24 * 60 * 60 * 1000
    if (completedDate < today + timeInterval) {
        return (
            <div className="todo good-todo">
                <h4>{props.todo.todo_item}</h4>
                <p>Complete by:<span> {new Date(completedDate + timeInterval).toLocaleDateString()}</span></p>
                <p>Last Completed Date:<span> {new Date(completedDate).toLocaleDateString()}</span></p>
                <button
                    onClick={() => {
                        props.completeTodo(props.todo.id)
                    }}>
                    Complete
            </button>
                <button
                    onClick={() => {
                        props.deleteTodo(props.todo.todo_id)
                    }}>
                    Remove
            </button>
            </div>
        )
    } else {
        return (
            <div className="todo bad-todo">
                <h4>{props.todo.todo_item}</h4>
                <p>Complete by:<span> {new Date(completedDate + timeInterval).toLocaleDateString()}</span></p>
                <p>Last Completed Date:<span> {new Date(completedDate).toLocaleDateString()}</span></p>
                <button
                    onClick={() => {
                        props.completeTodo(props.todo.id)
                    }}>
                    Complete
            </button>
                <button
                    onClick={() => {
                        props.deleteTodo(props.todo.todo_id)
                    }}>
                    Remove
            </button>
            </div>
        )
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
            return <div className="active-todo">{props.todo.todo_item} Still Time</div>

    }
}
