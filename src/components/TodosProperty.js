import React from 'react';

function TodosProperty (props) {
    const {todos} = props;
    const isCompetedCount = todos.filter((todo) => todo.isCompeted).length
    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
                <i className="bi bi-list-ol"></i>
                <span className="text-muted">
                    { todos.length }
                </span>
            </button>
            <button type="button" className="btn btn-success">
                <i className="bi bi-list-check"></i>
                <span className="text-muted">
                    {isCompetedCount}
                </span>
            </button>
            <button type="button" className="btn btn-warning">
                <i className="bi bi-list-stars"></i>
                <span className="text-muted">
                    {todos.length - isCompetedCount}
                </span>
            </button>
        </div>
    )
}

export default TodosProperty;