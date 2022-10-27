import React, { useState } from 'react';

function EditableTodo (props) {   
    const {todo, updateTodo} = props;
    const [editableTodo, setEditableTodo] = useState(todo)
    return (
            <div className='list-group-item d-flex gap-2 justify-content-between'>
                <input type="text"
                value={editableTodo.text}
                className="form-control"
                placeholder="Todo Title"
                onChange={(e) => setEditableTodo({...editableTodo, text: e.target.value})}
                />
                <button type="button" className="btn btn-success" onClick={() => updateTodo(editableTodo)}>
                    <i className="bi bi-hurricane"></i>
                </button>
            </div>
    )
}

export default EditableTodo;
