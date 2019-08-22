import React, { useState } from 'react'

export default function TodoCard(props) {
    const [show, setShow] = useState(false)
    let handleShow = () => (
        setShow(!show)
    )
    return (
        <div className="todo good-todo">
            <div className="circleInfoContainer"><div className={`circle ${props.good ? 'goodTodo' : 'badTodo'}`}>{props.good ? 'G' : 'B'}</div>
                <div className="info">
                    <div className="title">{props.todo.todo_item}</div>
                    <div className="date">Due<span> {new Date(props.completedDate + props.timeInterval).toLocaleDateString()}</span></div>
                    <div className="date">Last<span> {new Date(props.completedDate).toLocaleDateString()}</span></div>
                </div></div>
            <div className="menu" onClick={handleShow}>
                <i class="material-icons">
                    more_vert</i>
            </div>
            <div className={`hiddenDrawer ${show ? 'hiddenDrawerShow' : ''}`}>
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
        </div>
    )
}
