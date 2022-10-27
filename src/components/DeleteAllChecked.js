import React from 'react';

function DeleteAllChecked (props) {
    const {deleteCheckedTodos, checkAllTodos, checkedLength} = props;
    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-warning" onClick={() => checkAllTodos()}>
                Check All
            </button>
            <button type="button" 
                    className="btn btn-danger" 
                    disabled={checkedLength ? '' : 'disabled'} 
                    onClick={() => deleteCheckedTodos()}>
                Delete All Checked
            </button>
        </div>
    )
}

export default DeleteAllChecked;