import React from 'react';

function Todo (props) {   
    const {todo, toggleCompeteTodo, toggleCheckedTodo, editTodo, deleteTodo} = props;
    const {id, text, isCompeted, isChecked} = todo
    const classes = ['bi']
    if (isCompeted) classes.push('bi-check-square-fill')
    else classes.push('bi-play-fill')
    
    return (
        <li className={`list-group-item d-flex gap-2 justify-content-between ${isChecked ? 'text-white bg-success' : ''}`}>
            <div className='todo'>
                <input className='mx-2 d-none' id={id} type="checkbox" checked={isChecked ? 'checked' : ''} onChange={() => toggleCheckedTodo(id)} />
                <label className="text-muted fw-bold todo-label" htmlFor={id}>{text}</label> 
            </div>
            <div className="btn-group" role="group">
                <button type="button" className={`btn ${ isCompeted ? "btn-success" : "btn-warning"}`} onClick={() => toggleCompeteTodo(id)}>
                    <i className={classes.join(' ')}></i>
                </button>
                <button type="button" className="btn btn-primary" onClick={() => editTodo(id)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger" onClick={() => deleteTodo(id)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            </div>
        </li> 
    )
}

export default Todo;
