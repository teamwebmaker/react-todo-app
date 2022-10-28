import React from 'react';

function Dropdown (props) {
    const {filteringTodos} = props;
    return (
        <select 
            className="form-select" 
            aria-label="Default select"
            onChange={(e) => filteringTodos(e.target.value)}>
            <option value="all">Select All Available Todos 📋</option>
            <option value="completed">Select Only Completed Todos ✅</option>
            <option value="active">Select Only Active Todos ⚡ </option>
        </select>
    )
}

export default Dropdown;